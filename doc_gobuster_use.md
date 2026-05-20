# Gobuster 常用用法

Gobuster 适合做目录、DNS、虚拟主机枚举。常用参数：`-u` 指定目标，`-w` 指定字典，`-x` 指定扩展名，`-t` 控制线程。

```bash
gobuster dir -u http://192.168.1.10 -w wordlist.txt
```

```bash
gobuster dir -u http://192.168.1.10 -w wordlist.txt -x php,txt,bak -t 30
```

```bash
gobuster vhost -u http://example.local -w subdomains.txt --append-domain
```

```bash
gobuster dns -d example.local -w subdomains.txt
```

Gobuster 输出直接，适合做第一轮枚举。遇到统一 404 页面时，先观察响应长度，再加过滤参数收噪声。
