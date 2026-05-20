# Windows API 调用笔记：EnumDeviceDrivers

EnumDeviceDrivers 常见于驱动枚举、内核模块检查和驱动策略判断场景。分析时先分清它返回的是驱动列表、策略位还是签名或加载相关状态。
## 入口

```text
DLL: psapi.dll / kernel32.dll; Header: psapi.h / tlhelp32.h
```

```cpp
auto result = EnumDeviceDrivers(...);
```

```powershell
dumpbin /exports C:\Windows\System32\psapi.dll | findstr /i EnumDeviceDrivers
```

## 参数与上下文

驱动与模块相关接口要记录缓冲区长度、返回条目数、驱动基址、模块路径、策略标志和调用权限。涉及策略判断时，还要保留系统版本与启动配置。

这是枚举或迭代类接口，重点记录枚举范围、过滤条件、游标位置、返回数量和结束状态。分页或批量返回时，要保留每批结果的顺序，方便后续和日志时间线对齐。

## 返回与错误

这组接口常返回 BOOL、DWORD 或策略状态。枚举类调用要记录实际返回数量和缓冲区不足语义，策略查询类调用则要保留原始标志位。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存驱动文件路径、基址、签名状态、策略位、调用身份和系统版本。遇到驱动加载异常时，再把枚举结果和事件日志一起核对。
