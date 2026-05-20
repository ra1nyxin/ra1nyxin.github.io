# Windows API 调用笔记：WinHttpQueryHeaders

WinHttpQueryHeaders 用于读取 HTTP 响应头或状态码。它常用于判断下载结果、认证流程、重定向、缓存策略和服务端类型。

## 入口

```text
DLL: winhttp.dll; Header: winhttp.h
```

```cpp
BOOL ok = WinHttpQueryHeaders(req, WINHTTP_QUERY_STATUS_CODE | WINHTTP_QUERY_FLAG_NUMBER, nullptr, &status, &size, nullptr);
```

```powershell
dumpbin /exports C:\Windows\System32\winhttp.dll | findstr /i WinHttpQueryHeaders
```

## 参数关注

`dwInfoLevel` 决定查询状态码、指定头、原始头或系统时间。字符串结果通常需要先查询长度。状态码用数字读取更方便，原始头适合完整保留响应上下文。

## 返回与错误

缓冲区不足会返回 `ERROR_INSUFFICIENT_BUFFER` 并给出所需长度。指定头不存在时要和请求失败区分。

```cpp
BOOL ok = WinHttpQueryHeaders(req, WINHTTP_QUERY_RAW_HEADERS_CRLF, nullptr, buffer, &size, nullptr);
```

## 复核点

记录状态码、响应头摘要、重定向位置、认证头、内容类型、内容长度和服务器时间。安全分析中要把响应头与下载文件哈希、证书信息和代理日志关联。
