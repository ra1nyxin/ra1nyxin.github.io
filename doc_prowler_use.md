# Prowler 使用

Prowler 用于 AWS、Azure、GCP 和 Kubernetes 安全基线检查，适合云环境巡检、合规核对和复测。

## 云环境扫描

```bash
prowler aws
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

扫描前先确认凭据、账号、订阅、项目和 region。多账号环境里，范围没写清楚会让报告很难解释。

## 输出格式

```bash
prowler aws -M json html
```

```bash
prowler aws --profile prod -M csv json html
```

```bash
prowler aws --output-directory prowler-prod
```

HTML 适合人工看，JSON/CSV 适合整理问题清单。输出目录按账号和时间分开保存，避免多环境结果混在一起。

## 看结果

优先看身份权限、公开暴露、日志审计、密钥管理、网络边界和存储桶。Prowler 的检查项多，先按风险和可修复性排序，再进入治理流程。
