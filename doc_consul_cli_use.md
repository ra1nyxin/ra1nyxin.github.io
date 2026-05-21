# Consul CLI 检查

Consul CLI 用于检查服务发现、KV、ACL 和集群成员状态。微服务环境里，Consul 常常能反映内部服务边界和配置管理习惯。

## 集群和服务

```bash
consul members
```

```bash
consul catalog services
```

```bash
consul catalog nodes
```

先看成员和服务目录，确认是否存在不该暴露的节点、调试服务、临时服务或历史遗留注册。

## KV 和 ACL

```bash
consul kv get -recurse
```

```bash
consul acl token list
```

```bash
consul acl policy list
```

KV 里经常出现配置、内部地址和敏感路径。读取时只取必要样本，记录要脱敏。ACL 重点看匿名 token、管理 token 和策略通配符。

## 集群状态

```bash
consul operator raft list-peers
```

```bash
consul operator autopilot state
```

Raft 状态能帮助判断集群健康度。安全评估里要同时看匿名访问、KV 泄露、服务注册权限和 ACL 策略过宽。
