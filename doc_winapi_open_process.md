# Windows API 调用笔记：OpenProcess

OpenProcess 用来根据 PID 获取进程句柄。它本身不代表高风险行为，关键在于请求的访问掩码、调用者身份、目标进程类型和后续 API。安全日志里看到 OpenProcess 时，通常要继续追踪句柄用途。

## 入口

```text
DLL: kernel32.dll; Header: processthreadsapi.h
```

```cpp
HANDLE h = OpenProcess(PROCESS_QUERY_LIMITED_INFORMATION, FALSE, pid);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i OpenProcess
```

## 参数关注

`dwDesiredAccess` 是核心字段。查询镜像路径通常只需要 `PROCESS_QUERY_LIMITED_INFORMATION`；读取内存会出现 `PROCESS_VM_READ`；写入和改保护会涉及 `PROCESS_VM_WRITE`、`PROCESS_VM_OPERATION`；创建远程线程还会请求 `PROCESS_CREATE_THREAD`。同一个 API 调用，因为访问掩码不同，风险含义差别很大。

`bInheritHandle` 很少需要打开。打开后句柄可能被子进程继承，排查句柄泄漏或绕过父子边界时要留意。`dwProcessId` 需要和进程快照时间对齐，PID 复用会造成误判。

## 返回与错误

失败常见原因包括权限不足、目标进程已经退出、PPL 保护、会话边界或完整性级别限制。`ERROR_ACCESS_DENIED` 需要结合 Token 权限、目标进程保护级别和请求掩码一起看。

```cpp
DWORD err = h ? ERROR_SUCCESS : GetLastError();
```

## 复核点

审计时记录调用进程、目标 PID、目标镜像路径、访问掩码、调用身份、完整性级别、是否启用 SeDebugPrivilege、后续是否出现 ReadProcessMemory、WriteProcessMemory、VirtualAllocEx、CreateRemoteThread 等调用。单独的 OpenProcess 只能说明尝试访问目标，连续调用链才有判断价值。
