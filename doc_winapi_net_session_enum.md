# Windows API 调用笔记：NetSessionEnum

NetSessionEnum 用于枚举服务器上的网络会话。它常用于文件共享访问排查、横向活动分析、连接来源核对和 SMB 使用情况审计。

## 入口

```text
DLL: netapi32.dll; Header: lmshare.h
```

```cpp
NET_API_STATUS st = NetSessionEnum(server, nullptr, nullptr, 10, (LPBYTE*)&buf, MAX_PREFERRED_LENGTH, &read, &total, &resume);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetSessionEnum
```

## 参数关注

`servername` 是被查询服务器。`clientname` 和 `username` 可以过滤来源或用户。`level` 决定返回字段，较高级别可包含客户端名、用户名、连接时间、空闲时间和打开文件数。

## 权限与分页

远程查询通常需要管理权限。返回 `ERROR_MORE_DATA` 时继续使用 `resume_handle`。缓冲区使用 NetApiBufferFree 释放。

```cpp
NetApiBufferFree(buf);
```

## 复核点

记录服务器、客户端、用户名、连接时间、空闲时间、打开文件数和调用身份。分析异常访问时，把会话信息和 4624 登录事件、共享访问日志、NetShareEnum 结果放在一起看。
