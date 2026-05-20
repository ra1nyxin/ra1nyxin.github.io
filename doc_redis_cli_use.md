# redis-cli 常用检查

Redis 暴露在内网时经常承载缓存、队列和会话信息。检查重点是未授权访问、弱口令、危险写入能力、主从复制配置和敏感键名。

## 连接与基础信息

```bash
redis-cli -h 192.168.1.10 -p 6379 ping
```

```bash
redis-cli -h 192.168.1.10 -p 6379 INFO
```

```bash
redis-cli -h 192.168.1.10 -p 6379 CONFIG GET '*'
```

## 带认证连接

```bash
redis-cli -h 192.168.1.10 -p 6379 -a 'password' INFO
```

```bash
redis-cli -u redis://:password@192.168.1.10:6379 INFO keyspace
```

## 键名与数据抽样

```bash
redis-cli -h 192.168.1.10 --scan
```

```bash
redis-cli -h 192.168.1.10 --scan --pattern '*session*'
```

```bash
redis-cli -h 192.168.1.10 TYPE session:123
```

```bash
redis-cli -h 192.168.1.10 GET session:123
```

小记录：Redis 检查尽量只读，别在生产库里跑 `KEYS *`。需要抽样时用 `--scan`，并把命中的敏感键名和数据库编号一起记录。
