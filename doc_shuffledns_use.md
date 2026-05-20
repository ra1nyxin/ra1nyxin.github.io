# shuffledns 常用用法

shuffledns 适合基于 massdns 的子域名爆破和解析。常用参数：`-d` 域名，`-w` 字典，`-r` resolver 文件，`-o` 输出。

```bash
shuffledns -d example.com -w words.txt -r resolvers.txt -o found.txt
```

```bash
shuffledns -d example.com -list subdomains.txt -r resolvers.txt -o resolved.txt
```

```bash
shuffledns -d example.com -w words.txt -r resolvers.txt -mode bruteforce
```

```bash
shuffledns -d example.com -list subdomains.txt -r resolvers.txt -silent
```

shuffledns 适合大字典快速处理。输出后建议再用 dnsx 或 httpx 做二次确认。
