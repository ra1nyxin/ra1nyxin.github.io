# Windows API 调用笔记：send

send 用于通过已连接套接字发送数据。它常出现在 TCP 客户端和服务端通信中。分析时不要只看调用次数，更要看目标连接、发送长度、数据类型和错误返回。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
int sent = send(sock, buffer, length, flags);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i send
```

## 参数关注

`len` 是本次尝试发送的字节数，返回值可能小于请求长度。`flags` 常见为 0，也可能出现 `MSG_OOB`、`MSG_DONTROUTE`。TLS 场景下 send 看到的是加密后的记录层数据。

## 返回与错误

返回 `SOCKET_ERROR` 时读取 WSAGetLastError。非阻塞套接字出现 `WSAEWOULDBLOCK` 时，调用方通常会等待可写事件后重试。

```cpp
int err = sent == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

记录连接五元组、发送长度、返回长度、调用时间、调用线程和数据摘要。涉及敏感信息时，只保存协议类型、长度、方向和摘要，不把原始载荷放进普通文档。
