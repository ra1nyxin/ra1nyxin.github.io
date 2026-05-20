# Windows API 调用笔记：WinHttpGetProxyForUrl

WinHttpGetProxyForUrl 用于根据 WinHTTP 自动代理配置为指定 URL 计算代理。它常见于企业代理、PAC、WPAD、系统服务外联和更新器网络排查。

## 入口

```text
DLL: winhttp.dll; Header: winhttp.h
```

```cpp
BOOL ok = WinHttpGetProxyForUrl(session, url, &autoProxyOptions, &proxyInfo);
```

```powershell
dumpbin /exports C:\Windows\System32\winhttp.dll | findstr /i WinHttpGetProxyForUrl
```

## 参数关注

`lpcwszUrl` 是待计算代理的完整 URL。`WINHTTP_AUTOPROXY_OPTIONS` 里要记录是否使用 PAC URL、是否自动检测、是否允许缓存、是否自动登录。PAC 文件内容和来源非常重要。

## 返回与释放

成功后 `WINHTTP_PROXY_INFO` 可能包含代理地址和绕过列表，字符串由系统分配，需要 GlobalFree。

```cpp
GlobalFree(proxyInfo.lpszProxy);
```

## 复核点

记录 URL、PAC 地址、WPAD 结果、代理地址、绕过列表、调用身份和错误码。服务场景要注意 WinHTTP 代理和用户浏览器代理分离，不能直接拿浏览器设置解释服务外联。
