# Windows API 调用笔记：WSAIoctl

WSAIoctl 用于对 Winsock 套接字执行控制操作。它可以查询扩展函数指针、设置接口、获取网络状态或执行特定协议控制。分析时重点关注控制码和输入输出结构。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h / mswsock.h
```

```cpp
int rc = WSAIoctl(sock, code, inBuf, inLen, outBuf, outLen, &bytes, nullptr, nullptr);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i WSAIoctl
```

## 参数关注

常见控制码包括 `SIO_GET_EXTENSION_FUNCTION_POINTER`、`SIO_KEEPALIVE_VALS`、`SIO_ADDRESS_LIST_QUERY`、`FIONBIO`。不同控制码对应的输入输出结构完全不同，需要保存结构体来源和长度。

## 返回与错误

失败返回 `SOCKET_ERROR`，错误码使用 WSAGetLastError。异步模式下可能返回 `WSA_IO_PENDING`，需要结合 OVERLAPPED 完成结果。

```cpp
int err = rc == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

记录 socket、控制码、输入长度、输出长度、返回字节数、错误码和后续扩展函数调用。查询扩展函数指针时，要把 GUID 和得到的函数用途写清楚。
