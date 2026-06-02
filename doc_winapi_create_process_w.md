# Windows API 调用笔记：CreateProcessW

`CreateProcessW` 是 Windows 进程启动链路里最常见的观察点之一。很多日志只展示一个镜像名，但真正影响分析的是完整命令行、当前目录、父进程、环境变量、句柄继承、Token 上下文和创建标志。少任何一块，都可能把正常运维脚本误判成异常，或者把异常启动看成普通子进程。

入口信息如下：

```text
DLL: kernel32.dll
Header: processthreadsapi.h
Import: CreateProcessW
```

简化后的调用形式：

```cpp
BOOL ok = CreateProcessW(
    app,
    cmd,
    nullptr,
    nullptr,
    inheritHandles,
    flags,
    env,
    cwd,
    &startupInfo,
    &processInfo
);
```

最容易踩坑的是 `lpApplicationName` 和 `lpCommandLine` 的关系。`lpApplicationName` 可以为空，这时系统会从命令行里解析可执行文件路径。路径带空格但没有正确加引号时，解析结果可能和肉眼理解不一致。做安全审计时，这一类问题会引出 classic unquoted service path，也会影响脚本启动器、安装器和服务程序。

```cpp
CreateProcessW(
    nullptr,
    L"\"C:\\Program Files\\App\\app.exe\" --config C:\\Temp\\a.json",
    nullptr,
    nullptr,
    FALSE,
    0,
    nullptr,
    L"C:\\Program Files\\App",
    &si,
    &pi
);
```

如果 `lpApplicationName` 不为空，解析会稳定很多，但命令行仍然应该保留原始字符串。很多程序会自己重新解析 `argv`，引号、反斜杠和空参数都可能影响最终行为。

当前目录 `lpCurrentDirectory` 不只是显示字段。相对路径、DLL 搜索、脚本读取配置、子进程写日志，都会受到当前目录影响。分析“同一个命令在服务里失败、在交互 shell 里成功”时，当前目录经常是关键差异。

环境变量也很重要。`PATH`、`COMSPEC`、`TEMP`、`SystemRoot`、代理变量、语言运行时变量，都可能改变子进程加载内容或网络行为。传入自定义环境块时，如果使用 Unicode，需要带 `CREATE_UNICODE_ENVIRONMENT`。

```text
CREATE_UNICODE_ENVIRONMENT
```

`bInheritHandles` 是另一个常被忽略的字段。它打开后，子进程可能继承文件、管道、socket、job、section、token 相关句柄。正常软件会用它做 stdout/stderr 重定向和进程间通信，异常链路也可能利用继承句柄读写已有资源。只看命令行看不出这部分。

创建标志会暴露启动方式。`CREATE_SUSPENDED` 表示主线程先挂起，常见于调试器、注入器、某些沙箱和启动器。`CREATE_NO_WINDOW`、`DETACHED_PROCESS` 能解释为什么没有控制台窗口。优先级标志、breakaway/job 标志也要结合父进程看。

```text
CREATE_SUSPENDED
CREATE_NO_WINDOW
DETACHED_PROCESS
CREATE_NEW_CONSOLE
CREATE_BREAKAWAY_FROM_JOB
CREATE_UNICODE_ENVIRONMENT
```

`STARTUPINFO` 或 `STARTUPINFOEX` 也不能完全跳过。窗口显示状态、标准输入输出错误句柄、属性列表、父进程伪装、mitigation policy 都可能藏在这里。现代系统里，`PROC_THREAD_ATTRIBUTE_PARENT_PROCESS` 会让父进程关系不再等于简单的调用者关系。

成功后 `PROCESS_INFORMATION` 会返回进程句柄、线程句柄、PID 和 TID。调用方需要关闭句柄。失败时立刻读 `GetLastError()`，不要在日志里只写 `CreateProcess failed`。

```cpp
if (!ok) {
    DWORD err = GetLastError();
} else {
    CloseHandle(pi.hThread);
    CloseHandle(pi.hProcess);
}
```

排查时我会记录这些字段：调用进程和 PID、解析后的镜像路径、原始命令行、父进程、用户 SID、完整性级别、当前目录、环境变量摘要、创建标志、是否继承句柄、标准句柄是否被重定向、返回 PID/TID 和错误码。遇到服务、计划任务、WMI、WinRM、Office、浏览器、压缩软件这类父进程，还要把触发来源一起写下来。

判断一个进程启动是否正常，不要只问“谁启动了谁”。更可靠的问题是：它用什么命令行启动，在什么目录里启动，带了什么环境，继承了哪些句柄，创建时有没有隐藏窗口或挂起，父进程关系是否可信。把这些拼起来，CreateProcessW 的行为才完整。
