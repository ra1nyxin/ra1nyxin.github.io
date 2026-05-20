# Windows API 调用笔记：LsaEnumerateLogonSessions

LsaEnumerateLogonSessions 用于枚举本机当前已知的登录会话 LUID。它适合做会话清单、交互登录排查、服务登录分析和取证时间线整理。

## 入口

```text
DLL: secur32.dll; Header: ntsecapi.h
```

```cpp
NTSTATUS st = LsaEnumerateLogonSessions(&count, &luidList);
```

```powershell
dumpbin /exports C:\Windows\System32\secur32.dll | findstr /i LsaEnumerateLogonSessions
```

## 返回内容

返回的是 LUID 列表，单独看没有用户名、域名和登录类型。通常需要继续调用 LsaGetLogonSessionData。返回缓冲区使用 LsaFreeReturnBuffer 释放。

```cpp
LsaFreeReturnBuffer(luidList);
```

## 权限与边界

不同系统版本和权限下可见信息可能不同。普通进程可枚举的会话和受保护会话信息要分开记录，避免把缺失字段误判成不存在。

## 复核点

记录会话数量、枚举时间、调用身份、系统版本和后续每个 LUID 的详细信息。对远程桌面、计划任务、服务账号、网络登录，需要结合安全事件日志和 WTS 会话信息核对。
