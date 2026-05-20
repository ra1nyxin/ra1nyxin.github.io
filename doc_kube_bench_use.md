# kube-bench 使用

kube-bench 用于按 CIS Benchmark 检查 Kubernetes 节点和控制平面配置。

## 常用命令

```bash
kube-bench
```

```bash
kube-bench run --targets master
```

```bash
kube-bench run --targets node
```

```bash
kube-bench --json > kube-bench.json
```

```bash
kube-bench run --check 1.2.1
```

小记录：适合基线检查，结果要结合集群版本和托管 Kubernetes 的责任边界。
