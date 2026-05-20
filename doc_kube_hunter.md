# kube-hunter 常用用法

kube-hunter 适合 Kubernetes 暴露面检查。常用模式：远程扫描和内部 pod 扫描。

```bash
kube-hunter --remote 10.0.0.0/24
```

```bash
kube-hunter --interface eth0
```

```bash
kube-hunter --quick
```

```bash
kube-hunter --json
```

小记录：kube-hunter 适合找公开暴露的控制面和弱配置。结果需要结合集群结构和权限边界看。
