# yq 使用

yq 用于处理 YAML、JSON 和 TOML，适合 IaC 审计、K8s 清单批量处理。

## 常用命令

```bash
yq e . deployment.yaml
```

```bash
yq e ".spec.template.spec.containers[].image" deployment.yaml
```

```bash
yq e ".metadata.name" k8s/*.yaml
```

```bash
yq e -o=json deployment.yaml
```

```bash
yq e ".spec.replicas = 3" -i deployment.yaml
```

它适合做批量检查和小规模修补，复杂逻辑再交给脚本或策略引擎。
