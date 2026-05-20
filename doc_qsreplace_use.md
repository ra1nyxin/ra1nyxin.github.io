# qsreplace 常用用法

qsreplace 适合替换 URL 参数值，常用于批量测试同一组 payload。常用参数就是替换字符串和输入 URL 流。

```bash
cat urls.txt | qsreplace test
```

```bash
cat urls.txt | qsreplace FUZZ | httpx -silent
```

```bash
cat urls.txt | qsreplace "'"><script>alert(1)</script>"
```

```bash
cat urls.txt | qsreplace id=1
```

qsreplace 的价值是快速统一参数值，方便接后续探测。XSS、参数回显和简单注入验证时都能用得上。
