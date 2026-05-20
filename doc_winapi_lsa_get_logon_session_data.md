# Windows API 调用笔记：LsaGetLogonSessionData

LsaGetLogonSessionData 我会放在 登录会话和认证包信息复核 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: secur32.dll; Header: ntsecapi.h
```

```cpp
auto result = LsaGetLogonSessionData(...);
```

```powershell
dumpbin /exports C:\Windows\System32\secur32.dll | findstr /i LsaGetLogonSessionData
```

## 我会记录

```text
字段: logon id, auth package, logon type, user, domain, session
```

```text
复核: 只做会话画像时不需要扩散原始敏感字段，保留时间线和登录类型更有用
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
