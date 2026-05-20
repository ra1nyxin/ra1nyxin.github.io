# pip-audit 使用

pip-audit 适合检查 Python 项目依赖里的公开漏洞，适合本地开发、CI 和交付前复核。

## 常用命令

```bash
pip-audit
```

```bash
pip-audit -r requirements.txt
```

```bash
pip-audit -r requirements.txt -f json -o pip-audit.json
```

```bash
pip-audit --fix --dry-run
```

```bash
pip-audit --ignore-vuln PYSEC-2022-42969
```

结果要和锁文件一起保存，修复时先处理直接依赖，再看传递依赖是否能通过升级上游包解决。
