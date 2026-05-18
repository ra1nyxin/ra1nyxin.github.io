# DNS 工具常用用法

这篇记录 dig、nslookup、host 的常用命令。域名解析、权威服务器、MX、TXT、CNAME、解析链路和缓存问题，基本都可以从这里开始查。

## dig 基础查询

查询 A 记录。

```bash
dig example.com A
```

查询 AAAA 记录。

```bash
dig example.com AAAA
```

查询 CNAME。

```bash
dig www.example.com CNAME
```

只输出简短结果。

```bash
dig example.com A +short
```

## 指定 DNS 服务器

用 8.8.8.8 查询。

```bash
dig @8.8.8.8 example.com A
```

用 1.1.1.1 查询。

```bash
dig @1.1.1.1 example.com A
```

查询内网 DNS。

```bash
dig @192.168.1.1 internal.example.com A
```

## 常见记录

查询 MX。

```bash
dig example.com MX +short
```

查询 TXT。

```bash
dig example.com TXT +short
```

查询 NS。

```bash
dig example.com NS +short
```

查询 SOA。

```bash
dig example.com SOA +short
```

## 解析链路

跟踪解析过程。

```bash
dig example.com +trace
```

查看完整响应。

```bash
dig example.com A +noall +answer +authority +additional
```

查看 TTL。

```bash
dig example.com A +noall +answer
```

## 反向解析

PTR 查询。

```bash
dig -x 8.8.8.8
```

只输出 PTR 结果。

```bash
dig -x 8.8.8.8 +short
```

## nslookup 和 host

nslookup 查询 A 记录。

```bash
nslookup example.com
```

nslookup 指定 DNS。

```bash
nslookup example.com 8.8.8.8
```

host 查询。

```bash
host example.com
```

host 查 MX。

```bash
host -t MX example.com
```

## 小记录

DNS 排查时要分清本地缓存、递归 DNS、权威 DNS 和 CDN 调度。结果不一致时，分别指定几个 DNS 服务器查一遍，再看 TTL 和权威记录，通常能很快定位是哪一层不一致。
