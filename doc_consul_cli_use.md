# Consul CLI 检查

Consul CLI 用于服务发现、KV 和 ACL 检查，适合微服务环境审计。

## 常用命令

```bash
consul members
```

```bash
consul catalog services
```

```bash
consul kv get -recurse
```

```bash
consul acl token list
```

```bash
consul operator raft list-peers
```

小记录：Consul 风险集中在匿名访问、KV 泄露、服务注册和 ACL 策略过宽。
