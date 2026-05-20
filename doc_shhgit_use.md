# shhgit 使用

shhgit 用于监控或扫描 GitHub 上的潜在秘密泄露，适合外部暴露面巡检。

## 常用命令

```bash
shhgit --help
```

```bash
shhgit --local .
```

```bash
shhgit --config config.yaml
```

```bash
shhgit --output findings.json
```

```bash
shhgit --silent
```

小记录：外部监控命中后要验证归属和有效性，处理流程优先走吊销密钥。
