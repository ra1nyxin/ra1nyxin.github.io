# Aquatone 常用用法

Aquatone 适合网站截图和批量 Web 资产可视化。常用参数：输入 URL，输出目录，分辨率。

```bash
cat urls.txt | aquatone -out aquatone-out
```

```bash
cat urls.txt | aquatone -out aquatone-out -screenshot-timeout 10
```

```bash
cat urls.txt | aquatone -out aquatone-out -http-timeout 5
```

```bash
cat urls.txt | aquatone -out aquatone-out -resolution 1440x900
```

Aquatone 适合从大量站点里快速挑异常页面。和 httpx 一起跑，能很快看出标题、截图和状态码差异。
