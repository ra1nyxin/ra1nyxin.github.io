# Windows API 调用笔记：HttpCloseServerSession

HttpCloseServerSession 常见于 HTTP 会话建立、请求发送、响应读取和 URL 组配置场景。分析时不要只看 URL，本地代理、请求头、认证和会话句柄通常更关键。
## 入口

```text
DLL: httpapi.dll; Header: http.h
```

```cpp
auto result = HttpCloseServerSession(...);
```

```powershell
dumpbin /exports C:\Windows\System32\httpapi.dll | findstr /i HttpCloseServerSession
```

## 参数与上下文

HTTP、WinHTTP 和 WinINet 接口要记录 session/request/url group 句柄、URL、方法、请求头、代理配置、认证参数、缓冲区长度和异步上下文。服务端 HTTP Server API 相关调用还要保留队列、server session、url group 和绑定关系。

这是清理或释放类接口，适合用来核对生命周期是否闭合。需要记录释放对象来源、是否重复释放、释放后是否仍被访问，以及失败后的补救路径。

## 返回与错误

这组接口常返回句柄、BOOL、DWORD 或 Win32 错误码。异步模式下要把立即返回值和回调/完成通知分开记录，请求读写类调用还要保留字节数和最终状态。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存 URL、方法、请求头摘要、代理来源、认证状态、会话句柄和返回码。涉及服务端监听时，再补上 URL 绑定、请求队列和响应发送顺序。
