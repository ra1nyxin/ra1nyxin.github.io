# Windows API 调用笔记：connect

connect 用于让套接字连接到远端地址。它是确认网络外联目标时最关键的 Winsock 调用之一。分析时要保存目标 IP、端口、地址族、代理前后差异和调用进程。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
int rc = connect(sock, (sockaddr*)&addr, sizeof(addr));
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i connect
```

## 参数关注

`name` 指向 sockaddr 结构。IPv4、IPv6、Unix domain socket 的解析方式不同。端口是网络字节序，记录时要转换成人类可读格式。非阻塞 socket 返回 `WSAEWOULDBLOCK` 时，需要继续看 select、WSAPoll 或事件通知结果。

## 返回与错误

失败错误码使用 WSAGetLastError。`WSAECONNREFUSED`、`WSAETIMEDOUT`、`WSAENETUNREACH`、`WSAEHOSTUNREACH` 对排查网络路径很有用。

```cpp
int err = rc == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

记录目标地址、目标端口、协议、解析前域名、进程、用户、代理设置和连接结果。若域名解析与连接目标不一致，要把 DNS 查询、hosts、代理和 DoH/自带解析逻辑一起查。
