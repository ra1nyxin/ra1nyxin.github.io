# Cariddi 使用

Cariddi 用于爬取 URL、JS 和敏感信息，适合 Web 资产快速初筛。

## 常用命令

```bash
cariddi -u http://example.local
```

```bash
cariddi -list urls.txt
```

```bash
cariddi -u http://example.local -s
```

```bash
cariddi -list urls.txt -e
```

```bash
cariddi -u http://example.local -json
```

小记录：适合发现前端路径和泄露线索，结果要继续用 httpx 和手工访问过滤。
