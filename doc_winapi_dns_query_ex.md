# Windows API 调用笔记：DnsQueryEx

DnsQueryEx 常用于 DNS 查询、缓存、记录解析和解析路径排查。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: dnsapi.dll; Header: windns.h
```

```cpp
auto result = DnsQueryEx(...);
```

```powershell
dumpbin /exports C:\Windows\System32\dnsapi.dll | findstr /i DnsQueryEx
```

## 记录字段

```text
query name, record type, DNS server, TTL, response code, flags
```

## 复核点

```text
DNS 结果要保存记录类型和 TTL，同名不同类型的结果不能混写
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
