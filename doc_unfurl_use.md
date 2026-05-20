# unfurl 常用用法

unfurl 适合从 URL 里拆参数、路径、域名、查询串。常用参数：`domains`、`paths`、`keys`、`values`。

```bash
cat urls.txt | unfurl domains
```

```bash
cat urls.txt | unfurl paths
```

```bash
cat urls.txt | unfurl keys
```

```bash
cat urls.txt | unfurl values
```

unfurl 很适合做 URL 整理前的拆解。和 uro、qsreplace 一起用，参数测试会更快。
