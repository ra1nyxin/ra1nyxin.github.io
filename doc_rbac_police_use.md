# RBAC Police 使用

RBAC Police 用于分析 Kubernetes RBAC 权限风险，适合查过宽授权。

## 常用命令

```bash
rbac-police
```

```bash
rbac-police --cluster-context mycluster
```

```bash
rbac-police --output json
```

```bash
rbac-police --namespace default
```

```bash
rbac-police --rules rules.yaml
```

重点看 cluster-admin、secret 读取、pod 创建和 bind/escalate 权限。
