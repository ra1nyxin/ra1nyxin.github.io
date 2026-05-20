# Windows API 调用笔记：WinHttpSendRequest

WinHttpSendRequest 用于发送 HTTP 请求头和可选请求体。它是 WinHTTP 链路中真正开始网络通信的重要节点。

## 入口

```text
DLL: winhttp.dll; Header: winhttp.h
```

```cpp
BOOL ok = WinHttpSendRequest(req, headers, headerLen, body, bodyLen, totalLen, context);
```

```powershell
dumpbin /exports C:\Windows\System32\winhttp.dll | findstr /i WinHttpSendRequest
```

## 参数关注

`pwszHeaders` 保存追加请求头，可能包含认证、Cookie、内容类型、Host 覆盖等信息。`lpOptional` 和 `dwOptionalLength` 是随请求一起发送的初始正文。`dwTotalLength` 影响 Content-Length。

## 返回与错误

返回成功表示请求已提交，不代表服务器已响应。后续需要 WinHttpReceiveResponse。TLS、代理、认证、证书错误可能在发送阶段暴露。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录 URL、方法、请求头摘要、正文长度、代理、TLS 标志、返回错误码和后续响应状态。凭据、Cookie、Token 等敏感字段只保存存在性和摘要。
