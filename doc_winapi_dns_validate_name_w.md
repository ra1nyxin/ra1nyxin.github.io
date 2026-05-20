# Windows API 调用笔记：DnsValidateName_W

DnsValidateName_W 常见于名称解析、缓存管理和 DNS 记录读写场景。排查时先分清它处理的是查询结果、缓存条目、上下文句柄还是记录集合。
## 入口

```text
DLL: dnsapi.dll; Header: windns.h
```

```cpp
auto result = DnsValidateName_W(...);
```

```powershell
dumpbin /exports C:\Windows\System32\dnsapi.dll | findstr /i DnsValidateName_W
```

## 参数与上下文

DNS API 要记录查询名、记录类型、选项标志、上下文句柄、输入输出缓冲区，以及返回的 DNS_RECORD 或结果结构。涉及动态更新时，还要把提交的记录内容和认证上下文一起记下来。

这类记录按生命周期写最清楚：先看对象如何取得，再看执行了什么操作，最后看清理和错误码是否闭合。

## 返回与错误

DNS 相关接口常返回 DNS_STATUS、BOOL、指针或句柄。查询与更新类调用要记录状态码、返回记录数量和释放路径，释放类调用则要确认对象来源与释放类型匹配。

```cpp
auto status = result;
```

## 复核点

复核时保存域名、记录类型、服务器来源、缓存状态、调用进程和网络上下文。涉及动态更新或缓存刷新时，再把前后解析结果和 TTL 一起对照。
