# Windows API 调用笔记：WTSQuerySessionInformationW

WTSQuerySessionInformationW 用于读取指定终端服务会话的详细信息。它常和 WTSEnumerateSessionsW 配套，用来确认用户、域、客户端、连接状态和会话属性。

## 入口

```text
DLL: wtsapi32.dll; Header: wtsapi32.h
```

```cpp
BOOL ok = WTSQuerySessionInformationW(server, sessionId, WTSUserName, &buffer, &bytes);
```

```powershell
dumpbin /exports C:\Windows\System32\wtsapi32.dll | findstr /i WTSQuerySessionInformationW
```

## 信息类别

常用类别包括 `WTSUserName`、`WTSDomainName`、`WTSConnectState`、`WTSClientName`、`WTSClientAddress`、`WTSClientProtocolType`、`WTSSessionInfoEx`。不同类别返回结构不同，不能统一按字符串处理。

## 返回与释放

成功返回的缓冲区使用 WTSFreeMemory 释放。某些字段为空可能表示会话未登录用户、权限不足或该协议不提供对应信息。

```cpp
WTSFreeMemory(buffer);
```

## 复核点

记录会话 ID、信息类别、用户、域、客户端名、客户端地址、协议类型、连接状态和读取时间。安全分析时把 WTS 信息与安全事件、网络连接、进程会话 ID 对齐。
