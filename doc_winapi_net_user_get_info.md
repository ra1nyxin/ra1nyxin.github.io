# Windows API 调用笔记：NetUserGetInfo

NetUserGetInfo 我会放在 域、共享、用户、会话和工作站信息枚举 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: netapi32.dll; Header: lm.h / dsgetdc.h
```

```cpp
auto result = NetUserGetInfo(...);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetUserGetInfo
```

## 我会记录

```text
字段: server, domain, account, share, session client, resume handle
```

```text
复核: NetAPI 的错误码很有解释力，空结果和权限不足要分开写
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
