# Windows API 调用笔记：WinHttpConnect

WinHttpConnect 用于在 WinHTTP 会话下指定目标主机和端口。它不发起完整 HTTP 请求，但能确定请求将指向哪个服务器。

## 入口

```text
DLL: winhttp.dll; Header: winhttp.h
```

```cpp
HINTERNET conn = WinHttpConnect(session, L"example.com", INTERNET_DEFAULT_HTTPS_PORT, 0);
```

```powershell
dumpbin /exports C:\Windows\System32\winhttp.dll | findstr /i WinHttpConnect
```

## 参数关注

`pswzServerName` 保存原始主机名。`nServerPort` 要区分默认 HTTP、默认 HTTPS 和自定义端口。若后续走代理，网络连接目标可能是代理服务器，但 HTTP Host 和 TLS SNI 仍然指向这里。

## 返回与错误

返回连接句柄，使用后 WinHttpCloseHandle。失败常见于会话无效、参数错误或内存问题，真正网络连接错误通常出现在发送请求阶段。

```cpp
DWORD err = conn ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录主机名、端口、会话代理设置、调用进程和后续请求路径。分析外联时，把 WinHttpConnect 的主机名、DNS 结果、代理日志和 TLS 证书一起看。
