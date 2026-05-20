# Windows API 调用笔记：select

select 用于等待一组套接字的可读、可写或异常状态。常见落点包括非阻塞网络程序、小型代理和跨平台代码。排查 CPU 空转、连接超时、半开连接时，需要关注 select 的超时和集合变化。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
int rc = select(0, &readSet, &writeSet, &exceptSet, &timeout);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i select
```

## 参数关注

Windows 下第一个参数 `nfds` 会被忽略。`fd_set` 在返回后只保留就绪 socket，原始集合需要调用方自己保存。`timeval` 为 null 表示无限等待，为 0 表示轮询。

## 返回与错误

返回正数表示就绪 socket 数量，0 表示超时，`SOCKET_ERROR` 表示失败。错误码使用 WSAGetLastError。

```cpp
int err = rc == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

记录等待集合大小、超时时间、返回值、就绪方向和后续 send/recv。性能问题排查时，重点看是否用零超时循环轮询导致 CPU 占用升高。
