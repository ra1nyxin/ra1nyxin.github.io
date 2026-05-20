# Windows API 调用笔记：SetProcessWorkingSetSizeEx

SetProcessWorkingSetSizeEx 常出现在进程内存、性能计数和资源状态查询场景，主要处理读取进程内存占用、工作集、句柄数量、I/O 计数、时间片和缓解策略等运行状态。它适合性能排查、取证基线、异常进程分析和沙箱行为记录。

## 入口

```text
DLL: kernel32.dll; Header: memoryapi.h
```

```cpp
auto result = SetProcessWorkingSetSizeEx(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i SetProcessWorkingSetSizeEx
```

## 参数与上下文

查询类接口要记录目标进程句柄、请求的信息类别、结构体版本、输入缓冲区长度、输出长度和采样时间。进程状态变化很快，记录时要保存 PID、创建时间和镜像路径，避免 PID 复用造成误判。

这是状态修改类接口，重点记录调用前状态、请求的新状态、调用身份、目标对象和返回码。审计时要把前置查询、修改调用和后续验证放在同一条链路里。

## 返回与错误

这些接口通常返回 BOOL 或 DWORD 状态，失败时读取 GetLastError。结构体大小不匹配、权限不足、目标进程退出和系统版本差异是常见失败原因。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

整理证据时，把内存、句柄、线程、I/O、CPU 时间和 Job 限制一起看。单个数值只能说明某个采样点，连续采样和事件时间线更有参考价值。
