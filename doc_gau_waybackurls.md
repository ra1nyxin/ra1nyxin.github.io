# gau 和 waybackurls 常用用法

这篇记录 gau、waybackurls 的常用命令。它们适合从公开历史记录里整理 URL，比赛资产收集阶段经常用。

## gau

收集单个域名 URL。

```bash
gau example.com
```

保存结果。

```bash
gau example.com > urls.txt
```

多域名输入。

```bash
cat domains.txt | gau > urls.txt
```

过滤扩展名。

```bash
gau --blacklist png,jpg,gif,css,woff example.com
```

## waybackurls

收集历史 URL。

```bash
waybackurls example.com
```

多域名输入。

```bash
cat domains.txt | waybackurls > wayback.txt
```

去重整理。

```bash
cat urls.txt wayback.txt | sort -u > all-urls.txt
```

## 小记录

历史 URL 适合找老接口、参数名、备份路径和被前端隐藏的功能点。整理后可以按扩展名、参数和状态码继续筛。
