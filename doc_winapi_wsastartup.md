# Windows API 调用笔记：WSAStartup

WSAStartup 常用于 Winsock 初始化、解析、协议枚举和 Socket 控制。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h / ws2tcpip.h
```

```cpp
auto result = WSAStartup(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i WSAStartup
```

## 记录字段

```text
字段: address family, protocol, socket option, ioctl code, WSA error
```

```text
复核: 网络错误要记录 WSAGetLastError 的值，普通 GetLastError 经常不够
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
