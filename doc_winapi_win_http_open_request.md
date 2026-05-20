# Windows API 调用笔记：WinHttpOpenRequest

WinHttpOpenRequest 用于创建具体 HTTP 请求句柄。它决定方法、路径、HTTP 版本、引用页、可接受类型和安全标志。目标主机来自 WinHttpConnect。

## 入口

```text
DLL: winhttp.dll; Header: winhttp.h
```

```cpp
HINTERNET req = WinHttpOpenRequest(conn, L"GET", L"/api/status", nullptr, WINHTTP_NO_REFERER, WINHTTP_DEFAULT_ACCEPT_TYPES, WINHTTP_FLAG_SECURE);
```

```powershell
dumpbin /exports C:\Windows\System32\winhttp.dll | findstr /i WinHttpOpenRequest
```

## 参数关注

`pwszVerb` 是方法，`pwszObjectName` 是路径和查询串，`dwFlags` 中的 `WINHTTP_FLAG_SECURE` 表示 HTTPS。HTTP 方法异常、路径包含令牌、Referer 伪造、非默认 Accept 类型都值得记录。

## 返回与错误

成功返回请求句柄，后续通过 WinHttpSendRequest、WinHttpReceiveResponse、WinHttpReadData 完成通信。失败通常是句柄或参数问题。

```cpp
DWORD err = req ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录方法、路径、HTTPS 标志、Host、端口、User-Agent、代理模式和后续请求头。敏感查询参数只保存字段名和摘要。
