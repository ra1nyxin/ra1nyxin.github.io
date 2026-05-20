# Windows API 调用笔记：GetDeviceDriverFileNameW

GetDeviceDriverFileNameW 经常落在进程、线程、内存、同步和调试状态这类链路里，通常涉及基础运行时状态管理，覆盖内存区域、线程生命周期、同步对象、调试事件、Job 限制和进程枚举。分析时要把目标对象、句柄权限、时间线和后续 API 连接起来看。

## 入口

```text
DLL: psapi.dll / kernel32.dll; Header: psapi.h / tlhelp32.h
```

```cpp
auto result = GetDeviceDriverFileNameW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\psapi.dll | findstr /i GetDeviceDriverFileNameW
```

## 参数与上下文

内存接口要记录基址、大小、状态、类型、保护属性和目标进程。线程接口要记录线程 ID、起始地址、参数、栈、优先级和等待对象。同步对象要记录名称、命名空间、初始状态、超时和返回码。

看到这类接口时，别只记成功或失败。查询对象、输出结构、ReturnLength、错误码和二次调用结果都要放在一起看。

## 返回与错误

Kernel32 接口通常用 GetLastError；Toolhelp 枚举要处理 first/next 的结束状态；等待函数要区分 WAIT_OBJECT_0、WAIT_TIMEOUT、WAIT_FAILED 和 WAIT_ABANDONED。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

回看记录时，把申请、写入、改保护、线程创建、等待和释放放到同一条时间线里。调试和异常相关接口需要关联目标进程、权限、调试对象和事件序列。
