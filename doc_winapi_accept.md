# Windows API 调用笔记：accept

accept 用于接受传入连接并返回新的已连接套接字。它通常出现在 TCP 服务端、代理、隧道、调试服务和本地 IPC 桥接程序里。分析时要区分监听套接字和连接套接字。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
SOCKET client = accept(listener, (sockaddr*)&remote, &remoteLen);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i accept
```

## 参数关注

`s` 是监听套接字。返回的新 socket 才代表具体客户端连接。`addr` 可保存远端地址和端口，缺失时会增加后续关联难度。非阻塞模式下 `WSAEWOULDBLOCK` 属于常见状态。

## 返回与错误

失败返回 `INVALID_SOCKET`，错误码使用 WSAGetLastError。成功后继续关注 recv、send、shutdown、closesocket。

```cpp
int err = client == INVALID_SOCKET ? WSAGetLastError() : 0;
```

## 复核点

记录监听地址、监听端口、远端地址、远端端口、进程、用户和连接创建时间。对外服务需要结合防火墙规则、服务配置、TLS 握手和认证日志继续确认。
