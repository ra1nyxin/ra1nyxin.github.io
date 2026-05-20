# Windows API 调用笔记：LookupPrivilegeValueW

LookupPrivilegeValueW 用于把特权名称解析成 LUID。它通常出现在 AdjustTokenPrivileges 前，用来定位 SeDebugPrivilege、SeBackupPrivilege、SeRestorePrivilege 等权限项。

## 入口

```text
DLL: advapi32.dll; Header: winbase.h
```

```cpp
BOOL ok = LookupPrivilegeValueW(nullptr, L"SeDebugPrivilege", &luid);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LookupPrivilegeValueW
```

## 参数关注

`lpSystemName` 通常为 null。`lpName` 必须是系统定义的特权常量名，例如 `SeChangeNotifyPrivilege`、`SeImpersonatePrivilege`、`SeLoadDriverPrivilege`。解析成功只说明名称存在，不说明当前令牌拥有这个特权。

## 返回与错误

失败常见于特权名拼写错误或系统不支持。LUID 值适合本机当前运行环境使用，不建议跨系统长期保存后复用。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录请求的特权名、解析到的 LUID、调用系统版本和后续 AdjustTokenPrivileges 结果。分析权限变化时，要把解析、启用、实际访问结果三步分开写。
