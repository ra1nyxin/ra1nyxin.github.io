# URLHunter 使用

URLHunter 用于从网页和 JS 中收集 URL，适合前端接口线索整理。

## 常用命令

```bash
urlhunter -u http://example.local
```

```bash
urlhunter -l urls.txt
```

```bash
urlhunter -u http://example.local -o urls.txt
```

```bash
urlhunter -u http://example.local -depth 2
```

```bash
urlhunter -l urls.txt -json
```

小记录：URL 提取结果噪声大，后续要按域名、扩展名和参数做归一化。
