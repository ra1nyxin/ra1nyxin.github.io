# kdigger 使用

kdigger 用于枚举 Kubernetes 集群环境、容器运行时和节点线索。

## 常用命令

```bash
kdigger
```

```bash
kdigger -o json
```

```bash
kdigger dig
```

```bash
kdigger version
```

```bash
kubectl run kdigger --rm -it --image=quay.io/inguardians/kdigger
```

适合在授权场景里确认 Pod 内能看到哪些集群和宿主机信息。
