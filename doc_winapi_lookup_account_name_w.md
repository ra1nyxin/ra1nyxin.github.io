# Windows API 调用笔记：LookupAccountNameW

LookupAccountNameW 用于把账户名解析为 SID。它适合确认配置文件中的账号、服务运行账户、ACL 输入项和域账户引用。账户名解析依赖上下文，短名、UPN、域前缀、本机名前缀得到的结果可能不同。

## 入口

```text
DLL: advapi32.dll; Header: winbase.h
```

```cpp
BOOL ok = LookupAccountNameW(systemName, accountName, sid, &sidLen, domain, &domainLen, &use);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LookupAccountNameW
```

## 参数关注

`lpAccountName` 要保存原始输入。`DOMAIN\User`、`User@domain`、`NT SERVICE\Name`、`BUILTIN\Administrators` 都可能进入这里。`lpSystemName` 会影响本机账号和域账号解析优先级。

## 返回与错误

`ERROR_INSUFFICIENT_BUFFER` 常用于获取 SID 和域名缓冲区大小。`ERROR_NONE_MAPPED` 表示找不到对应 SID，排查时要确认域连接状态和输入格式。

```cpp
BOOL ok = LookupAccountNameW(nullptr, name, nullptr, &sidLen, nullptr, &domainLen, &use);
```

## 复核点

记录输入账户名、解析主机、输出 SID、域名、账户类型和错误码。涉及权限配置时，最终判断以 SID 为准，显示名只作为辅助信息。
