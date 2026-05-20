# crlfuzz 使用

crlfuzz 用于检测 CRLF 注入，适合响应头和重定向参数测试。

## 常用命令

```bash
crlfuzz -u http://example.local/?q=test
```

```bash
crlfuzz -l urls.txt
```

```bash
crlfuzz -u http://example.local/?q=FUZZ -o crlfuzz.txt
```

```bash
crlfuzz -l urls.txt -c 50
```

```bash
crlfuzz -u http://example.local/?q=test -s
```

小记录：命中后要手工确认响应头是否可控，以及能否造成缓存污染或响应拆分。
