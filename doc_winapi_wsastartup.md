# Windows API 调用笔记：WSAStartup

WSAStartup 是 Winsock 使用前的初始化入口。它通常出现在网络客户端、代理、扫描器、服务端程序和带网络功能的桌面软件里。单独看到它只能说明进程准备使用 Winsock，后续 socket、connect、send、recv 才能说明具体行为。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h
```

```cpp
int rc = WSAStartup(MAKEWORD(2, 2), &wsaData);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i WSAStartup
```

## 参数关注

`wVersionRequired` 一般请求 2.2。返回的 `WSADATA` 包含协商版本、描述和系统状态。老旧程序可能请求较低版本，兼容问题排查时需要保存请求版本和实际版本。

## 返回与清理

成功后同一进程可继续使用 Winsock。结束时调用 WSACleanup。错误码直接来自返回值，不需要 WSAGetLastError。

```cpp
int rc = WSAStartup(MAKEWORD(2, 2), &wsaData);
```

## 复核点

记录进程路径、加载模块、请求版本、协商版本和后续网络 API。恶意或异常判断不能只靠 WSAStartup，需要结合目标地址、协议、数据量、连接频率和调用栈。
