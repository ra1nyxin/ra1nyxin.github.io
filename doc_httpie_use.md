# HTTPie 使用

HTTPie 是更易读的 HTTP 客户端，适合 API 调试和安全复核。

## 常用命令

```bash
http GET http://example.local/api
```

```bash
http POST http://example.local/api/login username=alice password=pass
```

```bash
http -v GET http://example.local/api Authorization:"Bearer TOKEN"
```

```bash
http --form POST http://example.local/upload file@sample.txt
```

```bash
http --verify=no GET https://example.local
```

适合手工复现 API 请求，复杂认证和批量测试再交给脚本。
