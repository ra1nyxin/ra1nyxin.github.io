# Windows API 调用笔记：LsaOpenPolicy

LsaOpenPolicy 用于打开本机或远程系统的 LSA Policy 句柄。常见落点包括账号权限、审计策略、域信息、SID 查询和安全配置核查。LSA 接口返回 NTSTATUS，需要按 LSA 规则处理。

## 入口

```text
DLL: advapi32.dll; Header: ntsecapi.h
```

```cpp
NTSTATUS st = LsaOpenPolicy(&systemName, &objectAttributes, POLICY_VIEW_LOCAL_INFORMATION, &policy);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LsaOpenPolicy
```

## 参数关注

`SystemName` 为 null 表示本机。远程系统需要记录主机名、认证上下文和网络可达性。`DesiredAccess` 要按用途收窄，例如查看本地信息、查询账号权限、创建账号对象所需权限不同。

## 返回与清理

返回值是 NTSTATUS。需要用 LsaNtStatusToWinError 转成 Win32 错误便于记录。成功后的句柄使用 LsaClose 释放。

```cpp
ULONG err = LsaNtStatusToWinError(st);
```

## 复核点

记录目标系统、访问掩码、调用用户、返回 NTSTATUS、转换后的 Win32 错误和后续 LSA 操作。远程查询要和登录事件、网络连接、管理权限来源一起保存。
