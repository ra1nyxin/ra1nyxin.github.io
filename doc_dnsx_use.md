# dnsx 常用用法

dnsx 适合批量解析和 DNS 记录查询。常用参数：`-l` 输入列表，`-a` A 记录，`-cname` CNAME，`-resp` 输出响应。

```bash
dnsx -l subdomains.txt -a -resp
```

```bash
dnsx -l subdomains.txt -cname -resp
```

```bash
dnsx -l subdomains.txt -aaaa -resp-only
```

```bash
dnsx -l subdomains.txt -resolver resolvers.txt -o resolved.txt
```

dnsx 适合把子域名发现结果变成可解析资产。后面一般接 httpx 或端口扫描。
