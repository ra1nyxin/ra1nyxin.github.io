# Dalfox 常用用法

Dalfox 适合 XSS 参数测试。常用参数：`url` 单 URL，`file` URL 列表，`-o` 输出，`--proxy` 代理。

```bash
dalfox url "https://example.com/search?q=test"
```

```bash
dalfox file urls.txt -o dalfox.txt
```

```bash
dalfox url "https://example.com/search?q=test" --proxy http://127.0.0.1:8080
```

```bash
dalfox file urls.txt --skip-bav
```

小记录：Dalfox 适合对已发现参数做验证。先用 gau、katana、Arjun 整理 URL，再丢给 Dalfox 会更有效。
