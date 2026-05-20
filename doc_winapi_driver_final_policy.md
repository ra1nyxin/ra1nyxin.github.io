# Windows API 调用笔记：DriverFinalPolicy

DriverFinalPolicy 常见于驱动枚举、内核模块检查和驱动策略判断场景。分析时先分清它返回的是驱动列表、策略位还是签名或加载相关状态。
## 入口

```text
DLL: wintrust.dll; Header: wintrust.h / softpub.h
```

```cpp
auto result = DriverFinalPolicy(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wintrust.dll | findstr /i DriverFinalPolicy
```

## 参数与上下文

驱动与模块相关接口要记录缓冲区长度、返回条目数、驱动基址、模块路径、策略标志和调用权限。涉及策略判断时，还要保留系统版本与启动配置。

如果接口处在准备、查询、修改或清理链路中，记录时把阶段写明，避免只剩一个孤立的函数名。

## 返回与错误

这组接口常返回 BOOL、DWORD 或策略状态。枚举类调用要记录实际返回数量和缓冲区不足语义，策略查询类调用则要保留原始标志位。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存驱动文件路径、基址、签名状态、策略位、调用身份和系统版本。遇到驱动加载异常时，再把枚举结果和事件日志一起核对。
