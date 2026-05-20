# Windows API 调用笔记：AdjustTokenPrivileges

AdjustTokenPrivileges 用于启用或禁用令牌中的特权。它常出现在备份、调试、服务管理、系统时间调整、关机、符号链接创建等场景。调用成功只代表 API 执行完成，特权是否真的被启用还要检查 `GetLastError()`。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h
```

```cpp
BOOL ok = AdjustTokenPrivileges(token, FALSE, &state, sizeof(state), nullptr, nullptr);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i AdjustTokenPrivileges
```

## 参数关注

调用前通常先用 LookupPrivilegeValueW 把特权名解析成 LUID。`TOKEN_PRIVILEGES` 里要写清楚特权数量、LUID 和属性。启用特权使用 `SE_PRIVILEGE_ENABLED`，移除特权会改变后续行为，审计时需要单独标出来。

```cpp
BOOL okLookup = LookupPrivilegeValueW(nullptr, L"SeDebugPrivilege", &luid);
```

## 返回与错误

这个接口最容易误判的地方是返回值。返回非零后仍然可能出现 `ERROR_NOT_ALL_ASSIGNED`，表示请求的特权并不存在于当前令牌中。代码需要在成功返回后继续读取错误码。

```cpp
DWORD err = GetLastError();
```

## 复核点

记录调用身份、令牌来源、请求的特权名、调整前后的属性、返回值和错误码。安全分析里重点关注 SeDebugPrivilege、SeBackupPrivilege、SeRestorePrivilege、SeTakeOwnershipPrivilege、SeImpersonatePrivilege、SeLoadDriverPrivilege。需要结合后续动作判断影响，单独启用特权只能说明准备阶段。
