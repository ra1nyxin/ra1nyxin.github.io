# Windows API 调用笔记：CreateFileW

CreateFileW 名字像文件接口，实际覆盖文件、目录、卷、设备、管道、串口、控制台等多类对象。排查访问失败、路径绕行、设备交互和文件句柄泄漏时，它通常是最先看的入口。

## 入口

```text
DLL: kernel32.dll; Header: fileapi.h
```

```cpp
HANDLE h = CreateFileW(path, desiredAccess, shareMode, nullptr, creationDisposition, flags, nullptr);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i CreateFileW
```

## 参数关注

`lpFileName` 要保存原始路径和规范化后的路径。长路径、UNC、设备路径、重解析点、8.3 短路径、尾随空格和大小写差异都会影响判断。设备对象常见形式是 `\\.\DeviceName`，目录句柄通常需要 `FILE_FLAG_BACKUP_SEMANTICS`。

`dwDesiredAccess` 和 `dwShareMode` 要一起看。访问掩码决定当前调用想做什么，共享模式决定后续进程能否继续打开同一对象。很多“文件被占用”的问题其实来自共享模式设置过窄。

`dwCreationDisposition` 决定创建、覆盖或打开已有对象。排查破坏性操作时要重点记录 `CREATE_ALWAYS`、`TRUNCATE_EXISTING`、`OPEN_ALWAYS`。`dwFlagsAndAttributes` 里的 `FILE_FLAG_DELETE_ON_CLOSE`、`FILE_FLAG_OVERLAPPED`、`FILE_FLAG_OPEN_REPARSE_POINT` 也很关键。

## 返回与错误

失败返回 `INVALID_HANDLE_VALUE`。打开成功后通过 GetFileInformationByHandleEx 或 GetFinalPathNameByHandleW 复核最终对象，比只看输入路径更可靠。

```cpp
DWORD err = h == INVALID_HANDLE_VALUE ? GetLastError() : ERROR_SUCCESS;
```

## 复核点

记录原始路径、最终路径、访问掩码、共享模式、创建方式、属性标志、调用身份和文件对象 ID。涉及目录穿越、符号链接、驱动通信、命名管道时，把调用前后的对象状态也写下来。
