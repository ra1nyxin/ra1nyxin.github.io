# rbac-lookup 使用

rbac-lookup 用于快速查看 Kubernetes RBAC 绑定关系。

## 常用命令

```bash
rbac-lookup
```

```bash
rbac-lookup alice
```

```bash
rbac-lookup --kind user
```

```bash
rbac-lookup --output wide
```

```bash
rbac-lookup --cluster-wide
```

适合快速回答某个用户、组或 ServiceAccount 绑定了哪些角色。
