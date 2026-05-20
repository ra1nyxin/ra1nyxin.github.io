# Checkov IaC 检查

Checkov 用于扫描 Terraform、CloudFormation、Kubernetes、Dockerfile 等 IaC 配置。它适合在提交前发现云权限、网络暴露和加密配置问题。

## 基础扫描

```bash
checkov -d .
```

```bash
checkov -d terraform/
```

```bash
checkov -f deployment.yaml
```

## 输出和过滤

```bash
checkov -d . -o json > checkov.json
```

```bash
checkov -d . --quiet
```

```bash
checkov -d . --check HIGH
```

## 跳过规则

```bash
checkov -d . --skip-check CKV_AWS_20
```

```bash
checkov -d . --framework terraform,kubernetes
```

小记录：IaC 扫描适合提前拦截配置风险。跳过规则要写原因和到期时间，避免长期变成例外清单。
