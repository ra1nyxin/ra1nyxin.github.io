# kube-hunter 常用用法

kube-hunter 用于 Kubernetes 暴露面检查，常见模式有远程扫描和集群内部扫描。它适合找公开暴露的控制面、弱配置和常见风险入口。

## 远程扫描

```bash
kube-hunter --remote 10.0.0.0/24
```

```bash
kube-hunter --interface eth0
```

```bash
kube-hunter --quick
```

远程扫描前要确认授权范围和网段。`--quick` 适合先做轻量探测，发现入口后再细看具体服务和端口。

## 输出

```bash
kube-hunter --json
```

```bash
kube-hunter --remote 10.0.0.0/24 --json > kube-hunter.json
```

JSON 适合留档和后续整理。结果里重点看服务类型、暴露地址、风险描述和复现条件。

## 复核

kube-hunter 结果需要结合集群结构和权限边界看。API Server、Kubelet、Dashboard、etcd 这类高风险暴露要优先回到网络策略、安全组和认证配置里确认。
