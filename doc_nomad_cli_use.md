# Nomad CLI 检查

Nomad CLI 用于查看 HashiCorp Nomad 集群、任务、节点、分配和 ACL。安全检查时先看当前身份和集群状态，再看 job 定义里有没有敏感环境变量、危险 volume 或过宽网络配置。

## 集群状态

```bash
nomad status
```

```bash
nomad node status
```

```bash
nomad server members
```

先确认集群是否健康，节点是否 ready。节点状态异常时，job 失败和权限问题很容易混在一起。

## Job 和 Allocation

```bash
nomad job status
```

```bash
nomad job status JOB_NAME
```

```bash
nomad alloc status ALLOC_ID
```

```bash
nomad alloc logs ALLOC_ID
```

任务定义里重点看 image、env、volume、template、network、service 这些块。导出内容要脱敏，环境变量里很容易带 token、数据库连接串和内部地址。

## ACL

```bash
nomad acl token self
```

```bash
nomad acl policy list
```

```bash
nomad acl policy read POLICY_NAME
```

ACL 检查重点看当前 token 能否管理 job、node、namespace、quota 和 ACL 本身。能提交 job 的身份要额外看是否可以挂载宿主机路径或读取敏感 template。
