# Snyk CLI 使用

Snyk CLI 可用于依赖、容器和 IaC 检查，适合和开源扫描器做互补。

## 常用命令

```bash
snyk test
```

```bash
snyk test --json > snyk.json
```

```bash
snyk container test nginx:latest
```

```bash
snyk iac test .
```

```bash
snyk monitor --project-name app
```

Snyk 结果要看组织策略和项目语言，付费能力开启后结果会更完整。
