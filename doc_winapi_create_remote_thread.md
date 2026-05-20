# Windows API 调用笔记：CreateRemoteThread

CreateRemoteThread 用于在指定进程中创建线程。调试器、注入式测试工具、兼容层和部分管理软件可能使用它。安全分析里它通常需要与跨进程内存申请、写入、改保护等事件放在一起判断。

## 入口

```text
DLL: kernel32.dll; Header: processthreadsapi.h
```

```cpp
HANDLE thread = CreateRemoteThread(process, nullptr, 0, startAddress, parameter, 0, &threadId);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i CreateRemoteThread
```

## 参数关注

`hProcess` 通常需要 `PROCESS_CREATE_THREAD`、`PROCESS_QUERY_INFORMATION`、`PROCESS_VM_OPERATION`、`PROCESS_VM_WRITE`、`PROCESS_VM_READ` 中的一部分。权限组合要和前置调用一致。

`lpStartAddress` 是最关键字段。它可能指向目标进程已有模块导出函数、私有内存、映射段或 JIT 区域。需要把地址解析到模块、段、页面保护和内存类型。`lpParameter` 也要记录来源和长度。

## 返回与错误

成功返回线程句柄，不代表线程逻辑一定执行完成。后续通常需要 WaitForSingleObject、GetExitCodeThread 或线程事件来判断执行结果。

```cpp
DWORD err = thread ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录调用进程、目标进程、线程起始地址、参数地址、页面保护、关联模块、线程 ID 和后续退出码。若起始地址位于私有可执行内存，或前面有跨进程写入行为，需要完整保存时间线。
