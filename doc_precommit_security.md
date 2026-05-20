# pre-commit 安全钩子

pre-commit 可以把 secret 扫描、格式化和基础安全检查放到提交前执行。

## 常用命令

```bash
pre-commit install
```

```bash
pre-commit run --all-files
```

```bash
pre-commit run detect-secrets --all-files
```

```bash
pre-commit autoupdate
```

```bash
pre-commit clean
```

小记录：适合把轻量检查前移到开发机，重型扫描仍然放 CI。
