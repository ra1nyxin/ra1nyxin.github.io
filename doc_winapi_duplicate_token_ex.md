# Windows API 调用笔记：DuplicateTokenEx

DuplicateTokenEx 用于复制访问令牌，并可生成主令牌或模拟令牌。它常见于服务框架、远程管理、进程创建、身份切换和安全审计。判断时要看源令牌、目标令牌类型、模拟级别和请求权限。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h
```

```cpp
BOOL ok = DuplicateTokenEx(existingToken, desiredAccess, nullptr, SecurityImpersonation, TokenPrimary, &newToken);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i DuplicateTokenEx
```

## 参数关注

`dwDesiredAccess` 决定复制出的令牌能做什么。`ImpersonationLevel` 要重点记录，`SecurityAnonymous`、`SecurityIdentification`、`SecurityImpersonation`、`SecurityDelegation` 的能力不同。`TokenType` 决定后续能否用于 CreateProcessAsUserW。

## 返回与清理

成功后新令牌句柄需要关闭。失败常见于源令牌权限不足、模拟级别不允许、缺少必要特权或安全描述符限制。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录源令牌用户、源令牌类型、目标令牌类型、模拟级别、请求访问掩码和调用进程。若后续出现 ImpersonateLoggedOnUser、CreateProcessAsUserW、SetThreadToken，需要放在同一条身份切换链里分析。
