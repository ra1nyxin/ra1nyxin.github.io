# Windows API 调用笔记：DnsFlushResolverCache

DnsFlushResolverCache 用于清空本机 DNS 解析器缓存。它常见于网络修复工具、安装器、VPN 客户端、代理软件和排障脚本。调用后会影响后续域名解析结果。

## 入口

```text
DLL: dnsapi.dll; Header: windns.h
```

```cpp
BOOL ok = DnsFlushResolverCache();
```

```powershell
dumpbin /exports C:\Windows\System32\dnsapi.dll | findstr /i DnsFlushResolverCache
```

## 使用关注

该接口没有目标域名参数，影响的是本机解析器缓存整体。清缓存后，应用可能重新触发 DNS 查询，时间线分析时要把它和后续 DnsQueryW、getaddrinfo、connect 事件关联。

## 返回与错误

返回非零表示成功。失败时可读取 GetLastError。权限和系统服务状态可能影响结果。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录调用进程、调用身份、时间点、后续 DNS 查询和网络连接变化。排查 DNS 劫持、缓存污染、VPN 切换时，清缓存事件是重要分界点。
