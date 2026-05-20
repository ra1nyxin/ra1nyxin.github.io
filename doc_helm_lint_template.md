# Helm lint 与 template

Helm 自带 lint 和 template 适合在部署前检查 chart 渲染结果。

## 常用命令

```bash
helm lint ./chart
```

```bash
helm template app ./chart
```

```bash
helm template app ./chart -f values-prod.yaml
```

```bash
helm upgrade --install app ./chart --dry-run --debug
```

```bash
helm dependency update ./chart
```

安全复核时重点看渲染后的 securityContext、Service、Ingress 和 Secret。
