# assetfinder 常用用法

assetfinder 适合做被动子域名发现。常用参数：`-subs-only` 只要子域，`-all` 合并多个源，输入一个域名即可。

```bash
assetfinder example.com
```

```bash
assetfinder --subs-only example.com
```

```bash
assetfinder --all example.com > subdomains.txt
```

```bash
assetfinder example.com | sort -u > subdomains.txt
```

assetfinder 输出适合接 dnsx、httpx 或 naabu。被动枚举先铺宽，再用解析和探活收窄。
