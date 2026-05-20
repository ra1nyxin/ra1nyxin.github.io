# kubeval 使用

kubeval 用于校验 Kubernetes manifest schema，适合老项目和简单 CI。

## 常用命令

```bash
kubeval deployment.yaml
```

```bash
kubeval --strict deployment.yaml
```

```bash
kubeval --kubernetes-version 1.24.0 deployment.yaml
```

```bash
kubeval k8s/*.yaml
```

```bash
helm template app ./chart | kubeval --strict
```

小记录：新项目更推荐 kubeconform，但 kubeval 在旧流水线里仍然常见。
