# Windows API 调用笔记：LsaQueryInformationPolicy

LsaQueryInformationPolicy 用于从 LSA Policy 读取系统安全信息。它可以查询域信息、审计事件、主域信息、DNS 域信息等内容，常用于资产归属、域加入状态和策略核查。

## 入口

```text
DLL: advapi32.dll; Header: ntsecapi.h
```

```cpp
NTSTATUS st = LsaQueryInformationPolicy(policy, PolicyDnsDomainInformation, (PVOID*)&info);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LsaQueryInformationPolicy
```

## 参数关注

`PolicyHandle` 来自 LsaOpenPolicy。`InformationClass` 决定返回结构，常见值包括 `PolicyAccountDomainInformation`、`PolicyPrimaryDomainInformation`、`PolicyDnsDomainInformation`、`PolicyAuditEventsInformation`。

## 返回与释放

成功后返回缓冲区由 LSA 分配，使用 LsaFreeMemory 释放。结构体内的 UNICODE_STRING 长度按字节计算，解析时不要按 null 结尾字符串处理。

```cpp
LsaFreeMemory(info);
```

## 复核点

记录信息类别、域名、域 SID、DNS 域名、森林名、GUID、返回状态和目标主机。域环境排查时，把这里的结果和 NetGetJoinInformation、DsGetDcNameW、注册表域信息交叉验证。
