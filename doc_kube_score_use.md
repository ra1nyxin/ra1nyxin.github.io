# kube-score 使用

kube-score 用于检查 Kubernetes manifest 的可用性和安全建议。

## 常用命令

```bash
kube-score score deployment.yaml
```

```bash
kube-score score k8s/*.yaml
```

```bash
kube-score score --output-format ci deployment.yaml
```

```bash
helm template app ./chart | kube-score score -
```

```bash
kube-score score --ignore-test pod-networkpolicy deployment.yaml
```

它适合提交前检查资源限制、探针、镜像标签和安全上下文。
