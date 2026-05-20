# Katana 常用用法

Katana 适合 Web 爬取和 URL 收集。常用参数：`-u` 目标，`-list` 目标列表，`-d` 深度，`-jc` 解析 JS。

```bash
katana -u https://example.com
```

```bash
katana -u https://example.com -d 3 -jc
```

```bash
katana -list urls.txt -silent -o katana.txt
```

```bash
katana -u https://example.com -fx -ef png,jpg,css,woff
```

Katana 适合找隐藏路径、JS 引用和接口。输出后可以接 httpx、nuclei 或参数提取工具继续处理。
