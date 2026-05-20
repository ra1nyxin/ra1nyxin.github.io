# Windows API 调用笔记：DnsQueryEx

DnsQueryEx 是较新的 DNS 查询接口，支持更明确的请求结构、异步查询和取消流程。它适合现代网络组件、服务发现和需要控制查询参数的程序。

## 入口

```text
DLL: dnsapi.dll; Header: windns.h
```

```cpp
DNS_STATUS st = DnsQueryEx(&request, &result, &cancel);
```

```powershell
dumpbin /exports C:\Windows\System32\dnsapi.dll | findstr /i DnsQueryEx
```

## 参数关注

`DNS_QUERY_REQUEST` 里包含查询名、类型、选项、接口索引、DNS 服务器列表和完成回调。异步模式下需要保存取消句柄和回调结果。`DNS_QUERY_RESULT` 保存返回记录和扩展错误。

## 返回与释放

同步成功后按结果结构释放记录。异步返回 pending 时，真正结果在回调里。取消查询使用 DnsCancelQuery。

```cpp
DNS_STATUS st = DnsCancelQuery(&cancel);
```

## 复核点

记录查询名、类型、选项、接口、指定 DNS 服务器、同步或异步模式、返回记录和扩展错误。排查 split DNS、VPN、企业代理时，接口索引和服务器列表很关键。
