# Windows API 调用笔记：GetSecurityDescriptorDacl

GetSecurityDescriptorDacl 常用于 Token、SID、权限、ACL 和访问判定复核。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h / aclapi.h / sddl.h / authz.h
```

```cpp
auto result = GetSecurityDescriptorDacl(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i GetSecurityDescriptorDacl
```

## 记录字段

```text
字段: SID, token type, integrity level, privilege, access mask, DACL
```

```text
复核: 权限判断要把 token、DACL、完整性级别和 UAC 过滤状态放一起看
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
