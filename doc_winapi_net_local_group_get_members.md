# Windows API 调用笔记：NetLocalGroupGetMembers

NetLocalGroupGetMembers 用于读取本地组成员。它是确认本地管理员、远程桌面用户、备份操作员等敏感组成员关系的常用接口。

## 入口

```text
DLL: netapi32.dll; Header: lmaccess.h
```

```cpp
NET_API_STATUS st = NetLocalGroupGetMembers(server, group, 2, (LPBYTE*)&buf, MAX_PREFERRED_LENGTH, &read, &total, &resume);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetLocalGroupGetMembers
```

## 参数关注

`groupname` 要保存原始组名和本地化后的实际组名。不同语言系统里内置组显示名可能不同，SID 更稳定。`level` 决定返回 SID、名称或域信息，审计建议保留 SID。

## 分页与释放

成员较多时需要分页读取。返回项可能包含本地用户、域用户、域组、内置主体和无法解析 SID。

```cpp
NetApiBufferFree(buf);
```

## 复核点

记录目标服务器、组名、成员 SID、成员名称、成员类型、读取时间和调用身份。重点核查嵌套域组、过期账号、外部信任主体和不常见服务账号。
