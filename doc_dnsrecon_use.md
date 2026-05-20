# dnsrecon 常用用法

dnsrecon 适合 DNS 枚举、区域传送检查和字典爆破。常用参数：`-d` 域名，`-t` 类型，`-D` 字典。

```bash
dnsrecon -d example.com
```

```bash
dnsrecon -d example.com -t axfr
```

```bash
dnsrecon -d example.com -D subdomains.txt -t brt
```

```bash
dnsrecon -d example.com -a -j dnsrecon.json
```

小记录：dnsrecon 输出比较完整，适合做 DNS 侦察记录。区域传送、NS、MX、TXT 都值得看。
