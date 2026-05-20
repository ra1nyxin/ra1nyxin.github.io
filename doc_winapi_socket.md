# Windows API 调用笔记：socket

socket 用于创建网络套接字，是 Winsock 网络通信的基础入口。它能说明程序准备使用哪类地址族、套接字类型和协议，但还不能说明连接目标或数据内容。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
SOCKET s = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i socket
```

## 参数关注

`af` 常见为 `AF_INET`、`AF_INET6`、`AF_UNIX`。`type` 常见为 `SOCK_STREAM`、`SOCK_DGRAM`、`SOCK_RAW`。`protocol` 用于区分 TCP、UDP、ICMP 等协议。原始套接字和非常规协议需要单独标记。

## 返回与错误

失败返回 `INVALID_SOCKET`，错误码用 WSAGetLastError。成功后要关注 setsockopt、bind、connect、listen、accept、send、recv 等后续调用。

```cpp
int err = s == INVALID_SOCKET ? WSAGetLastError() : 0;
```

## 复核点

记录地址族、类型、协议、创建进程、调用栈和后续方向。服务端通常会出现 bind/listen/accept，客户端通常会出现 connect/send/recv。
