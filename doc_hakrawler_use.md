# hakrawler 常用用法

hakrawler 适合轻量爬取 URL。常用参数：`-depth` 深度，`-plain` 输出纯 URL，`-subs` 包含子域。

```bash
echo https://example.com | hakrawler
```

```bash
echo https://example.com | hakrawler -depth 3 -plain
```

```bash
cat urls.txt | hakrawler -plain > crawled.txt
```

```bash
echo https://example.com | hakrawler -subs -plain
```

hakrawler 输出简洁，适合快速接管道。复杂爬取用 Katana，轻量 URL 扩展用 hakrawler 就够。
