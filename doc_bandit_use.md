# Bandit 使用

Bandit 用于扫描 Python 源码中的常见安全问题，适合审计脚本、API 服务和运维工具。

## 常用命令

```bash
bandit -r .
```

```bash
bandit -r app -f json -o bandit.json
```

```bash
bandit -r app -lll
```

```bash
bandit -r app -x tests,venv
```

```bash
bandit -c bandit.yaml -r app
```

小记录：重点看命令执行、反序列化、硬编码密钥、弱随机数和危险文件权限。
