# NATS CLI 使用

NATS CLI 用于检查 NATS 服务、subject 和 JetStream 状态。

## 常用命令

```bash
nats --server nats://192.168.1.10:4222 server check
```

```bash
nats --server nats://192.168.1.10:4222 sub ">"
```

```bash
nats --server nats://192.168.1.10:4222 pub test hello
```

```bash
nats --server nats://192.168.1.10:4222 stream ls
```

```bash
nats --server nats://user:pass@192.168.1.10:4222 account info
```

NATS 检查重点是匿名连接、通配订阅、JetStream 数据和账号权限。
