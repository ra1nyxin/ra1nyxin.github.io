# Windows API 调用笔记：WTSUnRegisterSessionNotification

WTSUnRegisterSessionNotification 我会放在 RDP 会话、控制台会话和登录用户上下文枚举 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: wtsapi32.dll; Header: wtsapi32.h
```

```cpp
auto result = WTSUnRegisterSessionNotification(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wtsapi32.dll | findstr /i WTSUnRegisterSessionNotification
```

## 我会记录

```text
字段: session id, station name, username, domain, connect state, token availability
```

```text
复核: 会话信息可能包含隐私字段，记录时保留判断所需的最小字段
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
