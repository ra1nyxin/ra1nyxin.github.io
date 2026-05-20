# Windows API 调用笔记：getaddrinfo

getaddrinfo 我会放在 Winsock 初始化、解析、协议枚举和 Socket 控制 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h / ws2tcpip.h
```

```cpp
auto result = getaddrinfo(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i getaddrinfo
```

## 我会记录

```text
字段: address family, protocol, socket option, ioctl code, WSA error
```

```text
复核: 网络错误要记录 WSAGetLastError 的值，普通 GetLastError 经常不够
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
