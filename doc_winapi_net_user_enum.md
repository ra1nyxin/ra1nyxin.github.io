# Windows API 调用笔记：NetUserEnum

NetUserEnum 用于枚举本机或远程服务器上的用户账户。它常用于资产核查、弱口令面排查、遗留账号检查和权限基线审计。枚举结果需要结合域、本机 SAM 和目标服务器角色理解。

## 入口

```text
DLL: netapi32.dll; Header: lmaccess.h
```

```cpp
NET_API_STATUS st = NetUserEnum(server, 1, FILTER_NORMAL_ACCOUNT, (LPBYTE*)&buf, MAX_PREFERRED_LENGTH, &read, &total, &resume);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetUserEnum
```

## 参数关注

`servername` 为 null 表示本机，远程服务器需要记录目标、认证身份和网络环境。`level` 决定返回字段，级别越高信息越多。`filter` 决定枚举普通账户、工作站信任账户、服务器信任账户等类型。

## 分页与释放

大量账户时需要使用 `resume_handle` 分页。返回缓冲区使用 NetApiBufferFree 释放。`ERROR_MORE_DATA` 表示还有后续结果。

```cpp
NetApiBufferFree(buf);
```

## 复核点

记录目标服务器、枚举级别、过滤器、读取数量、总数、调用身份和错误码。审计时关注禁用状态、最后登录、密码策略字段、描述信息和异常命名账号。
