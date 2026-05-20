# Windows API 调用笔记：CreateProcessW

CreateProcessW 是排查 Windows 进程启动链路时最常见的入口之一。它能暴露启动路径、命令行、继承句柄、工作目录、环境变量和父子进程关系。日志里只看到一个进程名通常不够，真正影响判断的是完整命令行、当前目录、父进程上下文和创建标志。

## 入口

```text
DLL: kernel32.dll; Header: processthreadsapi.h
```

```cpp
BOOL ok = CreateProcessW(app, cmd, nullptr, nullptr, inheritHandles, flags, env, cwd, &si, &pi);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i CreateProcessW
```

## 参数关注

`lpApplicationName` 和 `lpCommandLine` 的解析规则容易被误读。路径带空格时要确认引号位置，命令行首段解析到的可执行文件可能和肉眼看到的字符串不一致。`bInheritHandles` 打开后，子进程可能拿到管道、文件、Token 相关句柄，排查异常行为时要把句柄继承也纳入记录。

`dwCreationFlags` 影响可见性和调试行为。常见关注点包括 `CREATE_NO_WINDOW`、`CREATE_SUSPENDED`、`DETACHED_PROCESS`、优先级标志、Job 相关限制以及 Unicode 环境块标志。`lpCurrentDirectory` 也需要单独保存，DLL 搜索、相对路径和脚本执行都会受它影响。

## 返回与清理

成功后 `PROCESS_INFORMATION` 里的进程句柄和线程句柄都需要关闭。失败时立即读取 `GetLastError()`，后续 API 调用可能覆盖错误码。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录时保留原始命令行、解析后的镜像路径、父进程、用户 SID、完整性级别、工作目录、创建标志和环境变量摘要。遇到服务、计划任务、WMI、Office、浏览器子进程等场景，还要把触发来源一起写下来，否则很难判断这是正常启动、脚本联动还是异常链路。
