# kxss 常用用法

kxss 适合检测潜在 XSS 反射点。常用参数：输入 URL 列表，检测参数反射，输出可疑点。

```bash
cat urls.txt | kxss
```

```bash
cat urls.txt | kxss -silent
```

```bash
cat urls.txt | kxss | tee kxss.txt
```

```bash
cat urls.txt | kxss | qsreplace '<svg/onload=alert(1)>'
```

kxss 适合作为筛选器使用。命中后要手工确认上下文、编码和过滤逻辑。
