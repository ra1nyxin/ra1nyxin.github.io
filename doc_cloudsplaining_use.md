# Cloudsplaining 使用

Cloudsplaining 用于分析 AWS IAM 策略风险，适合查过宽权限和危险动作。

## 常用命令

```bash
cloudsplaining download
```

```bash
cloudsplaining scan --input-file default.json
```

```bash
cloudsplaining scan --input-file default.json --output report
```

```bash
cloudsplaining create-exclusions-file
```

```bash
cloudsplaining scan --input-file default.json --exclusions-file exclusions.yml
```

IAM 结果要按用户、角色、策略和资源范围拆开看，尤其关注权限提升动作。
