# Parameth 使用

Parameth 用于枚举 GET/POST 参数，适合老 Web 应用参数发现。

## 常用命令

```bash
parameth -u http://example.local/page.php
```

```bash
parameth -u http://example.local/page.php -w params.txt
```

```bash
parameth -u http://example.local/page.php -p 20
```

```bash
parameth -u http://example.local/page.php --header "Cookie: sid=abc"
```

```bash
parameth -u http://example.local/page.php -o params_found.txt
```

小记录：参数发现后要结合响应差异和业务含义，不要只看状态码。
