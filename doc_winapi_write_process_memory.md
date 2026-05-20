# Windows API 调用笔记：WriteProcessMemory

WriteProcessMemory 用于向另一个进程的地址空间写入数据。调试器、补丁工具、自动化测试、输入法、辅助功能和安全产品都可能使用它。安全判断的重点是目标进程、写入地址、写入内容类型和后续控制流变化。

## 入口

```text
DLL: kernel32.dll; Header: memoryapi.h
```

```cpp
BOOL ok = WriteProcessMemory(process, remoteAddress, buffer, size, &written);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i WriteProcessMemory
```

## 参数关注

`hProcess` 一般需要 `PROCESS_VM_WRITE` 和 `PROCESS_VM_OPERATION`。`lpBaseAddress` 要和目标进程内存图对齐，确认它属于堆、栈、映像段、私有内存还是映射文件。`nSize` 与 `lpNumberOfBytesWritten` 都要记录，部分写入会影响后续判断。

写入内容不建议直接混入普通文档。可以保存摘要、长度、熵、文件偏移来源、结构体类型或字符串预览。敏感原始内容应单独隔离。

## 返回与错误

失败常见原因是目标地址不可写、跨页保护不一致、权限不足或目标进程退出。写入成功后仍需复核页面保护和后续执行路径。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录调用进程、目标进程、目标地址、写入长度、页面保护、内存类型、写入前后哈希和后续 API。若写入后出现 VirtualProtectEx、CreateRemoteThread、QueueUserAPC、SetThreadContext 或 ResumeThread，需要按链路复盘。
