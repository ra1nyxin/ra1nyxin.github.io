# RBAC Police 使用

RBAC Police 用于分析 Kubernetes RBAC 权限风险，适合检查过宽授权、危险 verb 和高权限绑定。它适合和 `kubectl auth can-i` 互相补充。

## 基础扫描

```bash
rbac-police
```

```bash
rbac-police --cluster-context mycluster
```

```bash
rbac-police --namespace default
```

先确认 context，再按 namespace 或全集群扫描。多集群环境里建议显式写 context，避免扫错。

## 输出和规则

```bash
rbac-police --output json
```

```bash
rbac-police --rules rules.yaml
```

```bash
rbac-police --output json > rbac-police.json
```

JSON 适合留档，自定义规则适合贴合组织内部基线。规则要能解释业务风险，别只追求命中数量。

## 复核重点

重点看 `cluster-admin`、secret 读取、pod 创建、exec、impersonate、bind、escalate。高风险项要回到 RoleBinding 和 ClusterRoleBinding，确认主体、namespace 和业务用途。
