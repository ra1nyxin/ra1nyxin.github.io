# Windows API 调用笔记：NetLocalGroupEnum

NetLocalGroupEnum 用于枚举本机或远程服务器上的本地组。它常用于权限基线、管理员组审计、远程管理面梳理和横向访问风险评估。

## 入口

```text
DLL: netapi32.dll; Header: lmaccess.h
```

```cpp
NET_API_STATUS st = NetLocalGroupEnum(server, 1, (LPBYTE*)&buf, MAX_PREFERRED_LENGTH, &read, &total, &resume);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetLocalGroupEnum
```

## 参数关注

`serverName` 为 null 时枚举本机。`level` 常用 0 或 1，级别 1 会返回描述。远程枚举需要注意防火墙、远程注册表策略、网络登录权限和本地管理员权限。

## 分页与释放

结果可能分页返回，`resume_handle` 需要循环使用。返回缓冲区由 NetAPI 分配，结束后调用 NetApiBufferFree。

```cpp
NetApiBufferFree(buf);
```

## 复核点

记录目标服务器、组名、描述、读取数量、总数和调用身份。高价值组包括 Administrators、Remote Desktop Users、Backup Operators、Remote Management Users、Event Log Readers。
