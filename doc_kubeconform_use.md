# kubeconform 使用

kubeconform 用于校验 Kubernetes YAML 是否符合 schema，速度快，适合 CI。

## 常用命令

```bash
kubeconform deployment.yaml
```

```bash
kubeconform -strict deployment.yaml
```

```bash
kubeconform -summary k8s/*.yaml
```

```bash
kubeconform -kubernetes-version 1.28.0 k8s/*.yaml
```

```bash
helm template app ./chart | kubeconform -strict -summary
```

小记录：它能提前发现字段拼写和版本不兼容问题，适合放在安全检查前面。
