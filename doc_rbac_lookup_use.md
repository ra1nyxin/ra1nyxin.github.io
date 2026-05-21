# rbac-lookup 使用

rbac-lookup 用来快速查看 Kubernetes RBAC 绑定关系。排查某个用户、组或 ServiceAccount 到底拿了哪些角色时，它比手动翻一堆 RoleBinding 更快。

## 基本查看

```bash
rbac-lookup
```

```bash
rbac-lookup alice
```

```bash
rbac-lookup --kind user
```

先按主体查，再看绑定到哪些 Role 或 ClusterRole。名字相近的账号要注意区分 user、group、serviceaccount。

## 输出范围

```bash
rbac-lookup --output wide
```

```bash
rbac-lookup --cluster-wide
```

`wide` 能看到更多上下文，`--cluster-wide` 适合找集群级绑定。看到 cluster-admin、edit、admin 这类角色时，要回到业务用途里核一下是否合理。

## 复核命令

```bash
kubectl auth can-i --as alice list secrets -A
```

```bash
kubectl get rolebinding,clusterrolebinding -A | findstr alice
```

rbac-lookup 适合快速定位绑定，最后还是要用 `kubectl auth can-i` 验证具体动作。报告里写清主体、namespace、角色和危险权限，比只贴工具输出更有用。
