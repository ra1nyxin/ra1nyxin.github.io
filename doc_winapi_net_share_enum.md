# Windows API 调用笔记：NetShareEnum

NetShareEnum 用于枚举本机或远程服务器上的共享资源。它常用于文件服务器审计、暴露面梳理、管理共享确认和横向访问路径分析。

## 入口

```text
DLL: netapi32.dll; Header: lmshare.h
```

```cpp
NET_API_STATUS st = NetShareEnum(server, 2, (LPBYTE*)&buf, MAX_PREFERRED_LENGTH, &read, &total, &resume);
```

```powershell
dumpbin /exports C:\Windows\System32\netapi32.dll | findstr /i NetShareEnum
```

## 参数关注

`level` 决定返回共享名、类型、备注、权限、路径、密码等字段。现代系统里共享权限和 NTFS ACL 都要看，单独的共享列表无法说明实际可访问范围。

## 分页与释放

共享数量较多时使用 `resume_handle` 分页。返回缓冲区由 NetAPI 分配，使用 NetApiBufferFree 释放。

```cpp
NetApiBufferFree(buf);
```

## 复核点

记录服务器、共享名、类型、路径、备注、当前连接数、权限字段和调用身份。重点关注非默认共享、可写路径、备份目录、部署目录、脚本目录和过宽的 Everyone/Authenticated Users 权限。
