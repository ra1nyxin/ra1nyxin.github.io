# Windows API 调用笔记：FwpmEngineClose0

FwpmEngineClose0 常见于 Windows Filtering Platform 策略管理和筛选器枚举场景。判断时要把引擎句柄、provider、filter 条件和调用权限一起看。
## 入口

```text
DLL: fwpuclnt.dll; Header: fwpmu.h
```

```cpp
auto result = FwpmEngineClose0(...);
```

```powershell
dumpbin /exports C:\Windows\System32\fwpuclnt.dll | findstr /i FwpmEngineClose0
```

## 参数与上下文

WFP 接口要记录 engine handle、provider key、subLayer key、filter 条件、枚举模板、返回条目数和 RPC 会话上下文。涉及远程引擎时，还要保留连接目标和认证方式。

这是清理或释放类接口，适合用来核对生命周期是否闭合。需要记录释放对象来源、是否重复释放、释放后是否仍被访问，以及失败后的补救路径。

## 返回与错误

这组接口通常返回 DWORD 或 FWP_E_*/Win32 状态。枚举与打开类调用要保留句柄来源和关闭路径，策略查询类调用则要记录返回条目和过滤条件。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存 provider、subLayer、filter 条件、权重、调用身份和系统版本。若接口涉及规则增删或枚举结果变化，再把前后策略快照放在一起。
