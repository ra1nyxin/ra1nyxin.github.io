# kubectx 和 kubens 常用用法

kubectx、kubens 适合快速切换 Kubernetes context 和 namespace。常用参数非常少，主要就是列出和切换。

```bash
kubectx
```

```bash
kubectx dev-cluster
```

```bash
kubens
```

```bash
kubens kube-system
```

小记录：多集群环境里这两个工具很省事。切换前最好先确认上下文，不然很容易把命令发到错误集群。
