# rabbitmqadmin 使用

rabbitmqadmin 用于 RabbitMQ 管理 API 操作，适合队列和权限复核。

## 常用命令

```bash
rabbitmqadmin -H 192.168.1.10 -u user -p pass list queues
```

```bash
rabbitmqadmin -H 192.168.1.10 -u user -p pass list users
```

```bash
rabbitmqadmin -H 192.168.1.10 -u user -p pass list permissions
```

```bash
rabbitmqadmin -H 192.168.1.10 -u user -p pass get queue=queue requeue=false
```

```bash
rabbitmqadmin -H 192.168.1.10 -u user -p pass export rabbitmq.json
```

小记录：检查重点是默认账号、管理端口暴露、vhost 权限和消息敏感内容。
