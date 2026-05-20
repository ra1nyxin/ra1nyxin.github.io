# Windows API 调用笔记：bind

bind 用于把套接字绑定到本地地址和端口。常见落点包括服务端监听、UDP 接收、本地代理、端口转发和多网卡程序。排查开放端口时，bind 能帮助定位进程为何占用某个地址。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
int rc = bind(sock, (sockaddr*)&addr, sizeof(addr));
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i bind
```

## 参数关注

本地地址为 `0.0.0.0` 或 `::` 表示监听所有接口。绑定到 `127.0.0.1` 只对本机可达。端口为 0 时由系统分配临时端口。IPv6 双栈行为受 socket 选项影响。

## 返回与错误

`WSAEADDRINUSE` 表示地址或端口被占用，`WSAEACCES` 可能和权限、保留端口或防火墙策略有关。UDP 和 TCP 的后续行为不同，TCP 服务端还会调用 listen。

```cpp
int err = rc == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

记录本地地址、端口、协议、进程、用户、服务名和后续 listen/recvfrom。安全审计中重点关注对外监听、异常高端口、本地代理端口和仅环回可达的管理接口。
