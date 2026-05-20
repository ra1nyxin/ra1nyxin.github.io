# kubectl RBAC 复核

Kubernetes RBAC 复核要看 ServiceAccount、RoleBinding、ClusterRoleBinding 和实际可执行动作。`kubectl auth can-i` 是最直接的验证方式。

## 身份和上下文

```bash
kubectl config current-context
```

```bash
kubectl auth whoami
```

```bash
kubectl get serviceaccounts -A
```

## 权限验证

```bash
kubectl auth can-i --list
```

```bash
kubectl auth can-i get secrets -A
```

```bash
kubectl auth can-i create pods --as system:serviceaccount:default:app
```

## 绑定检查

```bash
kubectl get rolebinding,clusterrolebinding -A
```

```bash
kubectl describe clusterrolebinding cluster-admin
```

```bash
kubectl get clusterrolebinding -o json | jq '.items[] | {name:.metadata.name, subjects:.subjects}'
```

K8s 权限风险要看实际动作。能读 secret、创建 pod、绑定角色、访问宿主机路径都要单独标记。
