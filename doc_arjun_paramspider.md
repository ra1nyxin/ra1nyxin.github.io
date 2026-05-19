# Arjun 和 ParamSpider 常用用法

这篇记录 Arjun、ParamSpider 的常用命令。它们适合比赛里整理参数名和历史 URL 参数。

## Arjun

发现 GET 参数。

```bash
arjun -u https://example.com/page
```

指定方法。

```bash
arjun -u https://example.com/api -m POST
```

读取目标列表。

```bash
arjun -i urls.txt -oT arjun.txt
```

输出 JSON。

```bash
arjun -u https://example.com/page -oJ arjun.json
```

## ParamSpider

抓取域名参数。

```bash
paramspider -d example.com
```

指定输出目录。

```bash
paramspider -d example.com -o params
```

整理参数 URL。

```bash
cat params/example.com.txt | sort -u > param-urls.txt
```

## 小记录

参数发现适合接在 URL 收集后面。先整理历史 URL，再用 Arjun 补充当前接口参数，后续测试会更有目标。
