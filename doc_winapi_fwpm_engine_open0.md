# Windows API 调用笔记：FwpmEngineOpen0

FwpmEngineOpen0 常见于 Windows Filtering Platform 策略管理和筛选器枚举场景。判断时要把引擎句柄、provider、filter 条件和调用权限一起看。
## 入口

```text
DLL: fwpuclnt.dll; Header: fwpmu.h
```

```cpp
auto result = FwpmEngineOpen0(...);
```

```powershell
dumpbin /exports C:\Windows\System32\fwpuclnt.dll | findstr /i FwpmEngineOpen0
```

## 参数与上下文

WFP 接口要记录 engine handle、provider key、subLayer key、filter 条件、枚举模板、返回条目数和 RPC 会话上下文。涉及远程引擎时，还要保留连接目标和认证方式。

这是建立句柄、连接、映射或上下文的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期经常比单次返回值更能解释问题。

## 返回与错误

这组接口通常返回 DWORD 或 FWP_E_*/Win32 状态。枚举与打开类调用要保留句柄来源和关闭路径，策略查询类调用则要记录返回条目和过滤条件。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存 provider、subLayer、filter 条件、权重、调用身份和系统版本。若接口涉及规则增删或枚举结果变化，再把前后策略快照放在一起。
