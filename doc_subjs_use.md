# subjs 使用

subjs 用于从页面里提取 JavaScript 链接。它适合在资产梳理后快速收集前端入口，再配合 SecretFinder、LinkFinder 或手工审计。

## 单站提取

```bash
subjs -i http://example.local
```

```bash
echo http://example.local | subjs
```

```bash
subjs -i http://example.local -c 20
```

## 批量提取

```bash
cat urls.txt | subjs > js.txt
```

```bash
cat hosts.txt | httpx -silent | subjs | sort -u > js.txt
```

```bash
cat js.txt | httpx -silent -mc 200 > live_js.txt
```

## 后续分析

```bash
cat live_js.txt | while read u; do curl -sk "$u"; done | grep -E "api|token|secret|key"
```

JS 文件里常见 API 路径、环境名、对象存储地址和 feature flag。压缩代码先格式化，再看路径和关键字。
