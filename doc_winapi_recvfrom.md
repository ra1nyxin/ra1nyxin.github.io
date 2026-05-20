# Windows API 调用笔记：recvfrom

recvfrom 常见于套接字建立、地址转换、连接控制和数据收发场景。判断时要把协议族、阻塞模式、目标地址和后续 I/O 放在同一条链路里看。
## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h / ws2tcpip.h
```

```cpp
auto result = recvfrom(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i recvfrom
```

## 参数与上下文

Winsock 接口要记录 socket、地址族、协议、本地/远端地址、缓冲区长度、阻塞模式、事件对象和 OVERLAPPED 上下文。涉及扩展控制码或选项值时，还要保存具体 code、level 和 optname。

这是读取类接口，重点记录读取来源、目标缓冲区、请求长度、实际长度和部分读取状态。敏感内容只保存摘要和结构信息。

## 返回与错误

Winsock 相关接口通常返回 SOCKET、int 或错误状态，并通过 WSAGetLastError() 给出失败原因。非阻塞模式下 WSAEWOULDBLOCK、WSA_IO_PENDING 这类状态要和后续完成路径一起看。

```cpp
int err = result == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

复核时保存本地地址、远端地址、协议、连接状态、缓冲区长度、调用线程和后续收发动作。若接口参与了代理、隧道或监听链路，再把握手阶段与关闭阶段一起核对。
