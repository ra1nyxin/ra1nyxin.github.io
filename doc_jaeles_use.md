# Jaeles 使用

Jaeles 是 Web 漏洞检测框架，适合把自定义签名用于批量验证。

## 常用命令

```bash
jaeles scan -u http://example.local -s signatures/
```

```bash
jaeles scan -U urls.txt -s signatures/ -o jaeles-out
```

```bash
jaeles scan -u http://example.local -s signatures/ -L 20
```

```bash
jaeles config init
```

```bash
jaeles server -L 127.0.0.1:5000
```

小记录：适合做自定义规则验证，签名命中后仍要手工复现请求。
