# KubiScan 使用

KubiScan 用来分析 Kubernetes RBAC 关系和潜在权限提升路径。它适合放在集群权限审计里，先快速找出高风险 ServiceAccount、过宽的 ClusterRoleBinding、能碰 secret 或 workload 的账号。

## 基本扫描

```bash
kubiscan -h
```

```bash
kubiscan -a
```

```bash
kubiscan -rs
```

`-a` 适合先看全局，`-rs` 可以把可疑 ServiceAccount 拉出来。扫完后不要直接按工具结论下判断，先回到 namespace、RoleBinding、ClusterRoleBinding 里核对象。

## 权限路径

```bash
kubiscan -rp
```

```bash
kubiscan -csa
```

`-rp` 用来看潜在提升路径，`-csa` 更适合盯 ServiceAccount。重点看是否能读取 secret、创建 pod、挂载 hostPath、修改 rolebinding 或 impersonate 其他身份。

## 复核方式

```bash
kubectl auth can-i --as system:serviceaccount:default:app-sa get secrets -n default
```

```bash
kubectl get rolebinding,clusterrolebinding -A | findstr app-sa
```

工具结果要用 `kubectl auth can-i` 回查。很多风险点只有结合命名空间、实际绑定对象和业务用途才知道优先级。

## 记录重点

记录时把账号、namespace、绑定角色、危险 verb、危险 resource 写清楚。只写“存在提权路径”后面很难分派修复。
