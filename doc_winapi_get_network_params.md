# Windows API 调用笔记：GetNetworkParams

GetNetworkParams 多见于设备枚举、驱动、无线和系统能力查询场景，调用语义主要是枚举设备、读取设备属性、处理通知、查询无线配置、检查驱动和系统能力。它们常见于资产采集、硬件诊断、终端管控、无线排查和安全代理。

## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h
```

```cpp
auto result = GetNetworkParams(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i GetNetworkParams
```

## 参数与上下文

SetupAPI 和 CfgMgr32 要记录设备实例 ID、Class GUID、接口 GUID、属性键、缓冲区长度和返回的 DEVINST。WLAN/RAS/电源相关接口要记录接口 GUID、profile、连接状态、策略 GUID 和调用权限。

这类调用经常会先拿长度再取数据，缓冲区不足不一定是异常。记录最终成功读取的内容和前面的探测过程更有价值。

## 返回与错误

设备类接口经常用 BOOL、CONFIGRET 或 DWORD 状态。枚举函数要记录索引、结束条件和缓冲区不足状态，释放函数要与分配来源配套。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存设备路径、驱动文件、签名状态、硬件 ID、类 GUID、用户权限和系统版本。无线和远程访问接口还要关联 profile 来源、认证方式和连接时间。
