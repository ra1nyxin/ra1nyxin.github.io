# Windows API 调用笔记：SetSecurityDescriptorOwner

SetSecurityDescriptorOwner 我会放在 安全描述符、SACL/DACL、继承关系和 SDDL 转换 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: advapi32.dll; Header: aclapi.h / sddl.h
```

```cpp
auto result = SetSecurityDescriptorOwner(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i SetSecurityDescriptorOwner
```

## 记录字段

```text
object type, SDDL, owner, group, DACL present, inheritance flags
```

## 复核点

```text
ACL 记录要保留对象类型和继承标志，单个 ACE 很难解释最终访问结果
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
