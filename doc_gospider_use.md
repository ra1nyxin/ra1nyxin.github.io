# GoSpider 常用用法

GoSpider 适合爬取页面、robots、sitemap 和 JS 中的链接。常用参数：`-s` 目标，`-S` 目标文件，`-d` 深度，`-o` 输出目录。

```bash
gospider -s https://example.com
```

```bash
gospider -s https://example.com -d 3 -o gospider-out
```

```bash
gospider -S urls.txt -o gospider-out
```

```bash
gospider -s https://example.com --robots --sitemap
```

GoSpider 适合把站点链接先铺开，再按参数、扩展名、状态码做筛选。
