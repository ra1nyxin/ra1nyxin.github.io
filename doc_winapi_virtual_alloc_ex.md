# Windows API 调用笔记：VirtualAllocEx

VirtualAllocEx 用于在指定进程地址空间中保留或提交内存。常见落点包括调试器、性能工具、辅助功能组件、自动化测试，也经常出现在安全产品告警里。判断时需要结合目标进程、保护属性和后续写入或线程操作。

## 入口

```text
DLL: kernel32.dll; Header: memoryapi.h
```

```cpp
LPVOID remote = VirtualAllocEx(process, address, size, MEM_COMMIT | MEM_RESERVE, PAGE_READWRITE);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i VirtualAllocEx
```

## 参数关注

`hProcess` 的访问权限通常需要 `PROCESS_VM_OPERATION`。`lpAddress` 为 null 时由系统选择地址；指定地址时要确认目标区域是否空闲。`dwSize` 会按页粒度处理，记录时保存原始大小和实际区域信息。

`flAllocationType` 常见组合是 `MEM_COMMIT | MEM_RESERVE`。`flProtect` 是安全分析重点，`PAGE_EXECUTE_READWRITE`、先写后改执行权限、跨进程申请内存都需要继续追踪。

## 返回与错误

成功返回目标进程中的基址。返回值不能在当前进程直接解引用。失败时常见错误包括权限不足、地址冲突、参数不对和目标进程退出。

```cpp
DWORD err = remote ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录调用进程、目标进程、申请大小、申请类型、保护属性、返回基址和后续 API。若随后出现 WriteProcessMemory、VirtualProtectEx、CreateRemoteThread 或 APC 相关调用，需要把整条链放在同一时间线里分析。
