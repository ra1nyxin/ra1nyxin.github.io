# httpx 和 naabu 常用用法

这篇记录 httpx、naabu 的常用命令。naabu 适合快速端口发现，httpx 适合 Web 探活、标题、状态码和技术指纹。

## naabu

扫描端口。

```bash
naabu -host 192.168.1.10
```

扫描目标列表。

```bash
naabu -list hosts.txt -o ports.txt
```

指定端口。

```bash
naabu -host 192.168.1.10 -p 80,443,8080,8443
```

限制速率。

```bash
naabu -list hosts.txt -rate 1000 -o ports.txt
```

## httpx

Web 探活。

```bash
httpx -l urls.txt
```

显示标题和状态码。

```bash
httpx -l urls.txt -title -status-code
```

显示技术指纹。

```bash
httpx -l urls.txt -tech-detect
```

输出 JSON。

```bash
httpx -l urls.txt -json -o httpx.json
```

## 管道组合

端口转 URL 探活。

```bash
cat hosts.txt | naabu -silent | httpx -silent -title -status-code
```

子域名探活。

```bash
cat subdomains.txt | httpx -silent -title -status-code -tech-detect
```

## 小记录

naabu 和 httpx 适合比赛里快速从资产列表收敛到可访问 Web 服务。结果里优先看标题、状态码、技术栈和非常规端口。
