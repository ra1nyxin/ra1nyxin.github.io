# ggshield 使用

ggshield 用于扫描 Git 仓库和文件中的密钥泄露，适合提交前和 CI 检查。

## 常用命令

```bash
ggshield secret scan path .
```

```bash
ggshield secret scan repo .
```

```bash
ggshield secret scan pre-commit
```

```bash
ggshield secret scan ci
```

```bash
ggshield secret ignore --last-found
```

小记录：密钥扫描命中后先吊销和轮换，再处理 Git 历史和误报标记。
