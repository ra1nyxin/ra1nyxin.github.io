# Windows API 调用笔记：WinHttpOpen

WinHttpOpen 用于初始化 WinHTTP 会话。常见落点包括系统服务、更新器、代理感知客户端、企业软件和无界面网络组件。它只是会话起点，具体目标要看后续 WinHttpConnect 和 WinHttpOpenRequest。

## 入口

```text
DLL: winhttp.dll; Header: winhttp.h
```

```cpp
HINTERNET session = WinHttpOpen(userAgent, WINHTTP_ACCESS_TYPE_DEFAULT_PROXY, WINHTTP_NO_PROXY_NAME, WINHTTP_NO_PROXY_BYPASS, 0);
```

```powershell
dumpbin /exports C:\Windows\System32\winhttp.dll | findstr /i WinHttpOpen
```

## 参数关注

`pszAgentW` 是 User-Agent，常用于流量归因。`dwAccessType` 决定代理来源，默认代理、显式代理、无代理的行为差别很大。代理绕过列表也要保存。

## 返回与清理

成功返回会话句柄，结束时用 WinHttpCloseHandle。失败时读取 GetLastError。

```cpp
DWORD err = session ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录 User-Agent、代理模式、代理地址、绕过规则、调用进程和后续请求目标。服务账号运行时还要注意 WinHTTP 代理配置和用户级浏览器代理配置不同。
