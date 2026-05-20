# Windows API 调用笔记：NetLocalGroupGetMembers

NetLocalGroupGetMembers 常用于 域、共享、用户、会话和工作站信息枚举。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: netapi32.dll; Header: lm.h / dsgetdc.h
```

```cpp
auto result = NetLocalGroupGetMembers(...);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetLocalGroupGetMembers
```

## 记录字段

```text
字段: server, domain, account, share, session client, resume handle
```

```text
复核: NetAPI 的错误码很有解释力，空结果和权限不足要分开写
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
