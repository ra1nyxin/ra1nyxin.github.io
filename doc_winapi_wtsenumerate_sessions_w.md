# Windows API 调用笔记：WTSEnumerateSessionsW

WTSEnumerateSessionsW 用于枚举终端服务会话。它适合确认本机或远程主机上的控制台、RDP、断开会话和活动用户状态。

## 入口

```text
DLL: wtsapi32.dll; Header: wtsapi32.h
```

```cpp
BOOL ok = WTSEnumerateSessionsW(server, 0, 1, &sessions, &count);
```

```powershell
dumpbin /exports C:\Windows\System32\wtsapi32.dll | findstr /i WTSEnumerateSessionsW
```

## 参数关注

`hServer` 可为 `WTS_CURRENT_SERVER_HANDLE`，也可来自 WTSOpenServerW。返回的每个会话包含 SessionId、WinStationName 和 State。会话状态要结合用户信息进一步查询。

## 返回与释放

成功后返回数组使用 WTSFreeMemory 释放。远程枚举失败时检查远程桌面服务、权限、防火墙和目标系统版本。

```cpp
WTSFreeMemory(sessions);
```

## 复核点

记录服务器、会话 ID、会话名、状态、枚举时间和调用身份。分析 RDP、控制台登录、断开会话残留时，继续用 WTSQuerySessionInformationW 读取用户、域、客户端地址和登录时间。
