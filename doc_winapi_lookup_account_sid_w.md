# Windows API 调用笔记：LookupAccountSidW

LookupAccountSidW 用于把 SID 解析成账户名、域名和账户类型。常见落点包括权限审计、ACL 展示、Token 分析和事件日志归一化。解析结果受本机、域控制器、信任关系和缓存状态影响。

## 入口

```text
DLL: advapi32.dll; Header: winbase.h
```

```cpp
BOOL ok = LookupAccountSidW(systemName, sid, name, &nameLen, domain, &domainLen, &use);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LookupAccountSidW
```

## 参数关注

`lpSystemName` 为 null 时使用本机解析。域 SID、外部信任 SID、已删除账号和服务 SID 可能无法解析成人类可读名称。`SID_NAME_USE` 要保存，它能区分用户、组、域、别名、服务账号等类型。

## 返回与缓冲区

常见模式是先调用一次获取所需长度，再分配缓冲区。`ERROR_NONE_MAPPED` 表示未映射到名称，仍然要保留原始 SID 字符串。

```cpp
BOOL ok = LookupAccountSidW(nullptr, sid, nullptr, &nameLen, nullptr, &domainLen, &use);
```

## 复核点

记录原始 SID、解析主机、域名、账户名、SID 类型和错误码。安全文档里建议同时保存 SID 字符串和解析结果，因为名称可能随时间变化。
