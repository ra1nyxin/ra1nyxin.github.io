# Scout Suite 使用

Scout Suite 用于多云安全配置审计，适合外部评估、内部基线复核和云账号初筛。它生成的 HTML 报告很适合快速看全局，但修复优先级要结合实际云架构判断。

## 云账号扫描

```bash
scout aws
```

```bash
scout aws --profile prod
```

```bash
scout azure
```

```bash
scout gcp
```

扫描前先确认当前凭据来源和权限边界。AWS profile、Azure subscription、GCP project 如果没对上，报告会看起来完整，实际漏了关键范围。

## 报告输出

```bash
scout aws --report-dir scout-report
```

```bash
scout aws --profile prod --report-dir scout-prod
```

报告目录要按云账号和时间分开。多账号审计时，目录名最好带上 account id、subscription id 或 project id。

## 看报告

先看 IAM、公开暴露、日志审计、存储桶、密钥管理和网络边界。Scout Suite 的发现适合初筛，最终修复要回到 Terraform、控制台配置或组织策略里确认。

## 习惯

报告里可能包含资源名、账号结构和内部域名，分享前要脱敏。保留原始报告和整理后的问题清单，后面复测会更清楚。
