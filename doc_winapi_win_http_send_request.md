# Windows API 调用笔记：WinHttpSendRequest

WinHttpSendRequest 我会放在 服务端风格 HTTP 请求、代理和 TLS 行为排查 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

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

## 我会记录

```text
字段: session, proxy, host, path, status code, response headers
```

```text
复核: WinHTTP 和 WinINet 代理来源不同，测试时要写清使用哪套栈
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
