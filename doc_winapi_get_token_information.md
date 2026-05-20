# Windows API 调用笔记：GetTokenInformation

GetTokenInformation 用于读取访问令牌的详细属性。排查权限、UAC、服务账号、模拟令牌、AppContainer、远程会话时，这个接口比只看用户名可靠得多。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h
```

```cpp
BOOL ok = GetTokenInformation(token, TokenUser, buffer, bufferSize, &needed);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i GetTokenInformation
```

## 参数关注

`TokenInformationClass` 决定返回结构。常查字段包括 `TokenUser`、`TokenGroups`、`TokenPrivileges`、`TokenOwner`、`TokenPrimaryGroup`、`TokenElevationType`、`TokenLinkedToken`、`TokenIntegrityLevel`、`TokenSessionId`。每个字段的结构和长度不同，缓冲区不足时会返回所需大小。

## 读取方式

通常先传空缓冲区获取 `ReturnLength`，再分配缓冲区读取。失败时保留错误码，`ERROR_INSUFFICIENT_BUFFER` 在第一阶段属于正常结果。

```cpp
BOOL ok = GetTokenInformation(token, TokenIntegrityLevel, nullptr, 0, &needed);
```

## 复核点

记录令牌类型、用户 SID、组 SID、完整性级别、提升状态、权限列表、会话 ID 和登录来源。分析权限问题时，把令牌字段和进程完整路径、父进程、服务账号、UAC 状态一起保存。
