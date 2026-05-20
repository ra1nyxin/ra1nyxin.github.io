# Windows API 调用笔记：getaddrinfo

getaddrinfo 用于把主机名和服务名解析成可连接地址列表。常见落点包括网络客户端、代理、同步工具和服务探测程序。分析外联时，域名解析结果要和后续 connect 的目标地址对应起来。

## 入口

```text
DLL: ws2_32.dll; Header: ws2tcpip.h
```

```cpp
int rc = getaddrinfo(host, service, &hints, &result);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i getaddrinfo
```

## 参数关注

`node` 是主机名或 IP，`service` 可以是端口或服务名。`hints` 控制地址族、socket 类型、协议和标志。`AI_ADDRCONFIG`、`AI_PASSIVE`、`AI_NUMERICHOST` 会影响结果。

## 返回与释放

成功后返回链表，使用 freeaddrinfo 释放。错误码来自返回值，可用 gai_strerrorA 辅助显示。

```cpp
freeaddrinfo(result);
```

## 复核点

记录输入域名、服务名、hints、返回地址列表、地址顺序和调用时间。若程序使用自带 DNS、DoH、代理或缓存，getaddrinfo 结果可能无法覆盖全部解析路径。
