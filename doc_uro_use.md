# uro 常用用法

uro 适合清理和标准化 URL。常用参数：输入 URL 列表，保留唯一路径，去掉无用参数。

```bash
cat urls.txt | uro > cleaned.txt
```

```bash
cat urls.txt | uro --keep-params > with-params.txt
```

```bash
cat urls.txt | uro | sort -u > cleaned.txt
```

```bash
cat urls.txt | uro | httpx -silent -status-code
```

uro 适合把重复、冗余、参数混乱的 URL 先收一遍。整理过的 URL 再交给 fuzz 或验证工具会更稳。
