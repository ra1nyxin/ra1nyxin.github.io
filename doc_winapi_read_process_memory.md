# Windows API 调用笔记：ReadProcessMemory

ReadProcessMemory 用于读取其他进程地址空间中的数据。它常见于调试器、崩溃采集、内存取证、性能分析和安全监控。读取行为本身需要结合目标进程、地址范围和读取内容判断。

## 入口

```text
DLL: kernel32.dll; Header: memoryapi.h
```

```cpp
BOOL ok = ReadProcessMemory(process, base, buffer, size, &read);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i ReadProcessMemory
```

## 参数关注

`hProcess` 通常需要 `PROCESS_VM_READ`。读取地址要先通过 VirtualQueryEx 或内存映射信息确认状态，避免把未提交页面、guard page、映像空洞误判成读取失败。

`nSize` 和 `lpNumberOfBytesRead` 要同时保存。读取跨页区域时，某一页不可读可能导致整体失败或只读取一部分。针对敏感进程，还要确认保护级别、PPL 状态和调用身份。

## 返回与错误

失败常见错误包括 `ERROR_PARTIAL_COPY`、访问被拒绝、地址无效和目标进程退出。错误码需要和目标内存区域状态一起记录。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录目标 PID、读取地址、读取长度、页面保护、内存类型、关联模块和调用目的。若读取对象是凭据缓存、浏览器数据、LSA 相关进程或安全产品进程，需要提高审计级别并保留调用栈证据。
