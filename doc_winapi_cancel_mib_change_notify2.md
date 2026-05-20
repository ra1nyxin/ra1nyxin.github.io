# Windows API 调用笔记：CancelMibChangeNotify2

CancelMibChangeNotify2 常见于套接字建立、地址转换、连接控制和数据收发场景。判断时要把协议族、阻塞模式、目标地址和后续 I/O 放在同一条链路里看。
## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h / netioapi.h
```

```cpp
auto result = CancelMibChangeNotify2(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i CancelMibChangeNotify2
```

## 参数与上下文

Winsock 接口要记录 socket、地址族、协议、本地/远端地址、缓冲区长度、阻塞模式、事件对象和 OVERLAPPED 上下文。涉及扩展控制码或选项值时，还要保存具体 code、level 和 optname。

这是会改变状态的接口，记录时要保存调用前状态、请求的新状态、调用身份、返回码和回滚路径。安全审计里要把它和前置查询、后续验证放在同一条链路中。

## 返回与错误

Winsock 相关接口通常返回 SOCKET、int 或错误状态，并通过 WSAGetLastError() 给出失败原因。非阻塞模式下 WSAEWOULDBLOCK、WSA_IO_PENDING 这类状态要和后续完成路径一起看。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存本地地址、远端地址、协议、连接状态、缓冲区长度、调用线程和后续收发动作。若接口参与了代理、隧道或监听链路，再把握手阶段与关闭阶段一起核对。
