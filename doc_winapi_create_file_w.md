# Windows API 调用笔记：CreateFileW

`CreateFileW` 这个名字很容易让人误会，它不是单纯的“打开文件”。在 Windows 里，文件、目录、卷、设备对象、命名管道、串口、控制台、驱动暴露的符号链接，很多入口最终都会落到它或者相近的 Native API 上。做行为分析、EDR 规则、兼容性排查或漏洞复现时，它通常是最值得先看的文件对象入口。

基本入口如下：

```text
DLL: kernel32.dll
Header: fileapi.h
Import: CreateFileW
```

典型调用长这样。真实代码里最需要保留的是原始路径、访问权限、共享模式、创建方式和 flags。

```cpp
HANDLE h = CreateFileW(
    path,
    desiredAccess,
    shareMode,
    nullptr,
    creationDisposition,
    flagsAndAttributes,
    nullptr
);
```

路径是第一处坑。`lpFileName` 可以是普通 Win32 路径，也可以是 UNC、长路径、设备路径或带重解析点的路径。只记录用户传入字符串是不够的，很多分析要同时保留原始路径和内核最终打开的对象。

```text
C:\Temp\a.txt
\\server\share\a.txt
\\?\C:\very\long\path\a.txt
\\.\PhysicalDrive0
\\.\pipe\name
```

目录句柄需要 `FILE_FLAG_BACKUP_SEMANTICS`，否则很多人会误以为目录无法被 CreateFileW 打开。符号链接、junction、mount point 这类重解析点要特别注意。默认行为会跟随重解析点，如果要打开重解析点本身，需要 `FILE_FLAG_OPEN_REPARSE_POINT`。

```cpp
HANDLE dir = CreateFileW(
    L"C:\\Temp",
    FILE_READ_ATTRIBUTES,
    FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE,
    nullptr,
    OPEN_EXISTING,
    FILE_FLAG_BACKUP_SEMANTICS,
    nullptr
);
```

`dwDesiredAccess` 描述当前调用想做什么。只读元数据可以用 `FILE_READ_ATTRIBUTES`，读文件内容常见是 `GENERIC_READ`，写入和覆盖则会出现 `GENERIC_WRITE`、`FILE_APPEND_DATA`、`DELETE` 等权限。做检测时不要只盯 `GENERIC_WRITE`，有些删除、改名或属性修改并不需要完整写权限。

`dwShareMode` 决定别人还能不能同时打开同一个对象。很多“文件被占用”的现场，真正的问题不是权限不足，而是某个进程用过窄的共享模式打开了文件。排这类问题时，访问掩码和共享模式必须成对看。

```cpp
DWORD access = GENERIC_READ;
DWORD share = FILE_SHARE_READ | FILE_SHARE_WRITE | FILE_SHARE_DELETE;
```

`dwCreationDisposition` 能直接暴露破坏性意图。`OPEN_EXISTING` 只是打开已有对象，`CREATE_NEW` 要求对象不存在，`OPEN_ALWAYS` 在不存在时创建，`CREATE_ALWAYS` 会覆盖已有文件，`TRUNCATE_EXISTING` 会把已有文件截断。审计文件破坏、日志清理和落地文件时，这个字段价值很高。

```text
CREATE_NEW         只在不存在时创建
CREATE_ALWAYS      总是创建，存在则覆盖
OPEN_EXISTING      只打开已有对象
OPEN_ALWAYS        存在则打开，不存在则创建
TRUNCATE_EXISTING  打开并截断已有对象
```

`dwFlagsAndAttributes` 里有不少行为线索。异步 I/O 会带 `FILE_FLAG_OVERLAPPED`，临时文件可能带 `FILE_ATTRIBUTE_TEMPORARY`，删除后关闭句柄才真正消失的文件常见 `FILE_FLAG_DELETE_ON_CLOSE`。绕过符号链接解析时会出现 `FILE_FLAG_OPEN_REPARSE_POINT`。

```text
FILE_FLAG_BACKUP_SEMANTICS
FILE_FLAG_OPEN_REPARSE_POINT
FILE_FLAG_DELETE_ON_CLOSE
FILE_FLAG_OVERLAPPED
FILE_ATTRIBUTE_HIDDEN
FILE_ATTRIBUTE_SYSTEM
```

返回值也有细节。失败返回 `INVALID_HANDLE_VALUE`，不是 `NULL`。失败后要立刻读 `GetLastError()`，后续任意 API 都可能覆盖错误码。常见错误里，`ERROR_ACCESS_DENIED` 不一定是 ACL，可能是目录缺少 flag、共享模式冲突或 UAC/完整性级别问题。

```cpp
if (h == INVALID_HANDLE_VALUE) {
    DWORD err = GetLastError();
}
```

成功后如果要确认最终对象，建议通过句柄反查。`GetFinalPathNameByHandleW` 能帮助识别路径重定向、符号链接和大小写规范化结果；`GetFileInformationByHandleEx` 可以拿到文件 ID、属性和时间戳，做关联更可靠。

```cpp
wchar_t finalPath[MAX_PATH];
GetFinalPathNameByHandleW(h, finalPath, MAX_PATH, FILE_NAME_NORMALIZED);
```

做日志字段设计时，我会记录这些内容：调用进程、用户 SID、完整性级别、原始路径、最终路径、desired access、share mode、creation disposition、flags、返回句柄、错误码、文件大小和文件 ID。只记录“某进程打开某文件”太粗，后面很难判断是正常读取、覆盖、截断、删除还是驱动通信。

排查 CreateFileW 时可以按这个顺序看：路径是否被规范化或重定向，访问权限是否合理，共享模式是否造成占用，创建方式是否有破坏性，flags 是否改变对象语义，最后再结合句柄反查最终对象。这个顺序比单纯 grep 路径稳定得多。
