# Windows API 调用笔记：recv

recv 用于从已连接套接字接收数据。它常用于客户端响应、服务端请求处理、代理转发和协议解析。排查网络程序卡住、断连和协议异常时，这个接口很关键。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
int n = recv(sock, buffer, length, flags);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i recv
```

## 参数关注

返回值大于 0 表示收到字节数，返回 0 表示连接被有序关闭。返回长度可能小于协议消息长度，应用层需要自己拼包。`flags` 影响接收行为，`MSG_PEEK` 会查看数据但不移除缓冲区内容。

## 返回与错误

`SOCKET_ERROR` 时读取 WSAGetLastError。非阻塞模式下 `WSAEWOULDBLOCK` 需要结合 select、WSAPoll 或事件通知处理。

```cpp
int err = n == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

记录连接五元组、接收长度、返回值、错误码、调用时间和协议状态。TLS 或自定义加密协议下，普通 recv 内容可能已经是密文，需要从更高层解析。
