# Windows API 调用笔记：WscGetSecurityProviderHealth

WscGetSecurityProviderHealth 常见于安全中心状态查询和终端防护健康检查场景。判断时要先分清它查的是防病毒、防火墙、反间谍软件还是整体健康状态。
## 入口

```text
DLL: wscapi.dll; Header: wscapi.h
```

```cpp
auto result = WscGetSecurityProviderHealth(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wscapi.dll | findstr /i WscGetSecurityProviderHealth
```

## 参数与上下文

安全中心接口要记录 provider 类型、产品状态、命名空间、返回缓冲区和调用权限。涉及 COM 或 WMI 包装层时，还要保留上层查询上下文。

这类调用经常会先拿长度再取数据，缓冲区不足不一定是异常。记录最终成功读取的内容和前面的探测过程更有价值。

## 返回与错误

这类接口通常返回 HRESULT、DWORD 或健康状态枚举值。记录时要保留原始状态码和映射后的含义。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存 provider 类型、产品名称、健康状态、调用进程和系统版本。若结果与控制面板或安全产品界面不一致，再补上同步时间和服务状态。
