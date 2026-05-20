# Windows API 调用笔记：GetSecurityInfo

GetSecurityInfo 我会放在 Token、SID、权限、ACL 和访问判定复核 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h / aclapi.h / sddl.h / authz.h
```

```cpp
auto result = GetSecurityInfo(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i GetSecurityInfo
```

## 我会记录

```text
字段: SID, token type, integrity level, privilege, access mask, DACL
```

```text
复核: 权限判断要把 token、DACL、完整性级别和 UAC 过滤状态放一起看
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
