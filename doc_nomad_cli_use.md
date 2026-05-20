# Nomad CLI 检查

Nomad CLI 用于 HashiCorp Nomad 集群任务、节点和 ACL 检查。

## 常用命令

```bash
nomad status
```

```bash
nomad node status
```

```bash
nomad job status
```

```bash
nomad alloc status ALLOC_ID
```

```bash
nomad acl token self
```

小记录：Nomad 任务定义里常见环境变量、镜像和 volume 配置线索，导出后要脱敏。
