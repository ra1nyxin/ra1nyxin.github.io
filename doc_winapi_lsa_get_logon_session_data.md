# Windows API 调用笔记：LsaGetLogonSessionData

LsaGetLogonSessionData 用于根据登录会话 LUID 读取会话详情。它常和 LsaEnumerateLogonSessions 配套，用于确认用户、域、认证包、登录类型、登录时间和会话 SID。

## 入口

```text
DLL: secur32.dll; Header: ntsecapi.h
```

```cpp
NTSTATUS st = LsaGetLogonSessionData(&luid, &data);
```

```powershell
dumpbin /exports C:\Windows\System32\secur32.dll | findstr /i LsaGetLogonSessionData
```

## 字段关注

常用字段包括 `UserName`、`LogonDomain`、`AuthenticationPackage`、`LogonType`、`Session`、`Sid`、`LogonTime`、`LogonServer`、`DnsDomainName`、`Upn`。UNICODE_STRING 字段需要按长度读取。

## 返回与释放

成功后返回缓冲区使用 LsaFreeReturnBuffer 释放。部分字段为空不代表会话无效，可能和登录类型、权限、系统版本有关。

```cpp
LsaFreeReturnBuffer(data);
```

## 复核点

记录 LUID、用户名、域、认证包、登录类型、会话 ID、SID、登录时间和来源服务器。分析横向登录、服务启动、RDP、网络访问时，要把该信息和 4624、4648、4672 等事件对齐。
