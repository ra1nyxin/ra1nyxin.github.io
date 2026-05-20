# Windows API 调用笔记：WinHttpSendRequest

WinHttpSendRequest 常用于 服务端风格 HTTP 请求、代理和 TLS 行为排查。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: winhttp.dll; Header: winhttp.h
```

```cpp
auto result = WinHttpSendRequest(...);
```

```powershell
dumpbin /exports C:\Windows\System32\winhttp.dll | findstr /i WinHttpSendRequest
```

## 记录字段

```text
字段: session, proxy, host, path, status code, response headers
```

```text
复核: WinHTTP 和 WinINet 代理来源不同，测试时要写清使用哪套栈
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
