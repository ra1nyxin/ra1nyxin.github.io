# kubectl-neat 使用

kubectl-neat 用于清理 kubectl 输出里的运行时字段，方便审计和生成干净 manifest。

## 常用命令

```bash
kubectl get pod nginx -o yaml | kubectl neat
```

```bash
kubectl get deploy app -o yaml | kubectl neat > app.yaml
```

```bash
kubectl neat -f noisy.yaml
```

```bash
kubectl get all -n default -o yaml | kubectl neat
```

```bash
kubectl get cm app -o yaml | kubectl neat
```

导出资源做审计时先 neat 一遍，可读性会好很多。
