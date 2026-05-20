# Windows API 调用笔记：OpenProcessToken

OpenProcessToken 用于打开进程关联的访问令牌。常见落点包括权限检查、用户身份确认、服务进程审计、完整性级别判断和权限提升排查。Token 相关结论需要谨慎，令牌类型、模拟级别、权限启用状态都会影响结果。

## 入口

```text
DLL: advapi32.dll; Header: processthreadsapi.h / securitybaseapi.h
```

```cpp
BOOL ok = OpenProcessToken(processHandle, TOKEN_QUERY, &tokenHandle);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i OpenProcessToken
```

## 参数关注

`ProcessHandle` 通常来自 OpenProcess。目标进程句柄本身需要足够权限，访问失败时先确认 OpenProcess 阶段是否已经受限。`DesiredAccess` 建议按用途收窄，查询 SID、组和完整性级别使用 `TOKEN_QUERY`；调整权限才需要 `TOKEN_ADJUST_PRIVILEGES`；复制令牌会涉及 `TOKEN_DUPLICATE`。

## 后续查询

打开令牌后通常会配合 GetTokenInformation 读取 `TokenUser`、`TokenGroups`、`TokenPrivileges`、`TokenIntegrityLevel`、`TokenElevationType`、`TokenLinkedToken`。这些字段要放在同一条记录里看，单独的管理员 SID 无法说明当前令牌已经处于提升状态。

```cpp
BOOL okInfo = GetTokenInformation(tokenHandle, TokenIntegrityLevel, buffer, size, &needed);
```

## 复核点

记录调用进程、目标进程、令牌类型、用户 SID、组 SID、完整性级别、权限列表和提升状态。涉及服务、计划任务、远程会话、UAC、AppContainer 时，还要写明会话 ID 和 Logon SID，避免把不同登录会话里的身份混在一起。
