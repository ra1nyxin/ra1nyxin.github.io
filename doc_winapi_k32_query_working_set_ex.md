# Windows API 调用笔记：K32QueryWorkingSetEx

K32QueryWorkingSetEx 在进程内存、性能计数和资源状态查询里很常见，覆盖的内容主要是读取进程内存占用、工作集、句柄数量、I/O 计数、时间片和缓解策略等运行状态。它适合性能排查、取证基线、异常进程分析和沙箱行为记录。

## 入口

```text
DLL: psapi.dll / kernel32.dll; Header: psapi.h / tlhelp32.h
```

```cpp
auto result = K32QueryWorkingSetEx(...);
```

```powershell
dumpbin /exports C:\Windows\System32\psapi.dll | findstr /i K32QueryWorkingSetEx
```

## 参数与上下文

查询类接口要记录目标进程句柄、请求的信息类别、结构体版本、输入缓冲区长度、输出长度和采样时间。进程状态变化很快，记录时要保存 PID、创建时间和镜像路径，避免 PID 复用造成误判。

查询类调用的重点在信息类别和缓冲区处理。先记录请求了什么，再记录实际返回了多少数据，以及状态码是否符合预期。

## 返回与错误

这些接口通常返回 BOOL 或 DWORD 状态，失败时读取 GetLastError。结构体大小不匹配、权限不足、目标进程退出和系统版本差异是常见失败原因。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时，将内存、句柄、线程、I/O、CPU 时间和 Job 限制一起看。单个数值只能说明某个采样点，连续采样和事件时间线更有参考价值。
