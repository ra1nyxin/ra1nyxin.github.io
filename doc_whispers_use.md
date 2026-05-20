# Whispers 使用

Whispers 用于扫描源码和配置中的硬编码秘密，适合补充 gitleaks 与 trufflehog。

## 常用命令

```bash
whispers .
```

```bash
whispers --config config.yml .
```

```bash
whispers --output whispers.json .
```

```bash
whispers --rules aws_key,private_key .
```

```bash
whispers --severity BLOCKER .
```

适合扫配置目录、Terraform、Kubernetes manifest 和历史脚本。
