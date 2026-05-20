# Safety CLI 使用

Safety 用来检查 Python 依赖漏洞，适合和 pip-audit 交叉验证。

## 常用命令

```bash
safety check
```

```bash
safety check -r requirements.txt
```

```bash
safety check -r requirements.txt --json > safety.json
```

```bash
safety scan --full-report
```

```bash
safety check --ignore 70612
```

两个依赖扫描器的数据库来源不同，报告差异很正常，最终要回到包名、版本和修复版本确认。
