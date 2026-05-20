# KubiScan 使用

KubiScan 用于分析 Kubernetes RBAC 和权限提升路径。

## 常用命令

```bash
kubiscan -h
```

```bash
kubiscan -a
```

```bash
kubiscan -rs
```

```bash
kubiscan -rp
```

```bash
kubiscan -csa
```

小记录：它适合找权限提升线索，结果要回到 RoleBinding 和 ClusterRoleBinding 手工确认。
