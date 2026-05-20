# k9s 常用用法

k9s 适合在终端里管理 Kubernetes。它本身是交互式工具，常用的是启动后切换资源视图和过滤。

```bash
k9s
```

```bash
k9s -n kube-system
```

```bash
k9s -c pod
```

```bash
k9s -c deploy
```

k9s 适合比赛里快速看 Pod、Deployment 和日志。熟悉 namespace、上下文和资源类型后，排查会快很多。
