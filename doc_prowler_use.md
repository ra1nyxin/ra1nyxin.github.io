# Prowler 使用

Prowler 用于 AWS、Azure、GCP 和 Kubernetes 安全基线检查，适合云环境巡检。

## 常用命令

```bash
prowler aws
```

```bash
prowler aws -M json html
```

```bash
prowler aws --profile prod --region us-east-1
```

```bash
prowler azure
```

```bash
prowler kubernetes
```

报告要按账号、订阅、项目和 region 分开保存，避免多环境结果混在一起。
