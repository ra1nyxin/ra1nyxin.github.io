# Windows API 调用笔记：DnsQueryW

DnsQueryW 用于执行 DNS 查询。它常见于网络客户端、服务发现、代理、更新器和内部域名解析。分析外联时，DNS 查询能提供域名意图，但最终连接地址还要看后续网络调用。

## 入口

```text
DLL: dnsapi.dll; Header: windns.h
```

```cpp
DNS_STATUS st = DnsQuery_W(name, DNS_TYPE_A, DNS_QUERY_STANDARD, nullptr, &records, nullptr);
```

```powershell
dumpbin /exports C:\Windows\System32\dnsapi.dll | findstr /i DnsQuery_W
```

## 参数关注

`pszName` 是查询名，`wType` 决定 A、AAAA、CNAME、TXT、SRV、MX 等记录类型。`Options` 会影响缓存、递归、hosts、网络查询和后缀搜索。记录时要保存查询名原文和类型。

## 返回与释放

成功后返回 DNS_RECORD 链表，使用 DnsRecordListFree 释放。失败状态需要保存，NXDOMAIN、超时、服务器失败含义不同。

```cpp
DnsRecordListFree(records, DnsFreeRecordList);
```

## 复核点

记录查询名、类型、选项、返回记录、TTL、DNS 服务器、错误码和调用进程。若程序使用 DoH、自带解析器或代理 DNS，DnsQueryW 可能看不到全部解析行为。
