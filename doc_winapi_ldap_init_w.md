# Windows API 调用笔记：ldap::initW

ldap::initW 常见于 设备枚举、驱动、无线和系统能力查询排查。从调用语义看，它们处理的是枚举设备、读取设备属性、处理通知、查询无线配置、检查驱动和系统能力。它们常见于资产采集、硬件诊断、终端管控、无线排查和安全代理。

## 入口

```text
DLL: wldap32.dll; Header: winldap.h
```

```cpp
// COM method: ldap::initW(...)
```

```powershell
oleview.exe
```

## 参数与上下文

SetupAPI 和 CfgMgr32 要记录设备实例 ID、Class GUID、接口 GUID、属性键、缓冲区长度和返回的 DEVINST。WLAN/RAS/电源相关接口要记录接口 GUID、profile、连接状态、策略 GUID 和调用权限。

如果接口处在准备、查询、修改或清理链路中，记录时把阶段写明，避免只剩一个孤立的函数名。

## 返回与错误

设备类接口经常用 BOOL、CONFIGRET 或 DWORD 状态。枚举函数要记录索引、结束条件和缓冲区不足状态，释放函数要与分配来源配套。

```cpp
HRESULT hr = result;
```

## 复核点

复核时保存设备路径、驱动文件、签名状态、硬件 ID、类 GUID、用户权限和系统版本。无线和远程访问接口还要关联 profile 来源、认证方式和连接时间。
