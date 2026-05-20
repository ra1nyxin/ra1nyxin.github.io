# Fierce 常用用法

Fierce 适合 DNS 枚举和内网域名线索发现。常用参数：`--domain` 域名，`--subdomain-file` 字典，`--dns-servers` 指定 DNS。

```bash
fierce --domain example.com
```

```bash
fierce --domain example.com --subdomain-file subdomains.txt
```

```bash
fierce --domain example.com --dns-servers 8.8.8.8
```

```bash
fierce --domain example.com --wide
```

小记录：Fierce 适合轻量 DNS 摸底。比赛里可以和 dnsrecon、subfinder、amass 的结果互相补齐。
