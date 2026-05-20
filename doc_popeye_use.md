# Popeye 使用

Popeye 用于巡检 Kubernetes 集群资源，适合发现配置异常和低质量资源。

## 常用命令

```bash
popeye
```

```bash
popeye -n default
```

```bash
popeye -A
```

```bash
popeye -o json > popeye.json
```

```bash
popeye --context mycluster
```

小记录：它适合做日常体检，安全相关重点看权限、镜像、资源限制和暴露服务。
