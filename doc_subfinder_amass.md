# subfinder 和 Amass 常用用法

这篇记录 subfinder、Amass 的常用命令。它们适合授权范围内的子域名发现和资产整理。

## subfinder

发现子域名。

```bash
subfinder -d example.com
```

保存结果。

```bash
subfinder -d example.com -o subdomains.txt
```

多域名输入。

```bash
subfinder -dL domains.txt -o subdomains.txt
```

静默输出。

```bash
subfinder -d example.com -silent
```

## Amass

被动枚举。

```bash
amass enum -passive -d example.com
```

保存结果。

```bash
amass enum -passive -d example.com -o amass.txt
```

多数据源枚举。

```bash
amass enum -d example.com
```

查看数据库结果。

```bash
amass db -show -d example.com
```

## 小记录

子域名发现结果要去重、解析、探活，再进入后续 Web 指纹和漏洞验证。比赛里先做被动发现更稳，再根据规则决定是否做主动枚举。
