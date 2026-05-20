# PureDNS 常用用法

PureDNS 适合高质量 DNS 爆破和解析验证。常用参数：`bruteforce` 爆破，`resolve` 解析，`--resolvers` 指定解析器。

```bash
puredns resolve subdomains.txt --resolvers resolvers.txt -w resolved.txt
```

```bash
puredns bruteforce words.txt example.com --resolvers resolvers.txt -w found.txt
```

```bash
puredns resolve found.txt --resolvers resolvers.txt --write resolved.txt
```

```bash
puredns resolve subdomains.txt --resolvers resolvers.txt --wildcard-tests 20
```

PureDNS 对通配解析处理比较好。比赛里先用可靠 resolver，避免因为解析器质量导致漏资产。
