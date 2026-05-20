# XSRFProbe 使用

XSRFProbe 用于检测 CSRF 相关问题，适合表单和状态变更接口初筛。

## 常用命令

```bash
xsrfprobe -u http://example.local
```

```bash
xsrfprobe -u http://example.local --crawl
```

```bash
xsrfprobe -u http://example.local --cookie "PHPSESSID=abc"
```

```bash
xsrfprobe -u http://example.local --proxy http://127.0.0.1:8080
```

```bash
xsrfprobe -u http://example.local --output xsrfprobe.txt
```

小记录：CSRF 结论要看状态变更、认证方式和 SameSite/CORS 配置。
