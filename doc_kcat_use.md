# kcat 使用

kcat 用于 Kafka 消息生产、消费和元数据枚举，适合消息系统安全检查。

## 常用命令

```bash
kcat -b 192.168.1.10:9092 -L
```

```bash
kcat -b 192.168.1.10:9092 -t topic -C -c 5
```

```bash
echo test | kcat -b 192.168.1.10:9092 -t topic -P
```

```bash
kcat -b 192.168.1.10:9092 -X security.protocol=SASL_SSL -X sasl.username=user -X sasl.password=pass -L
```

```bash
kcat -b 192.168.1.10:9092 -G group topic
```

小记录：Kafka 检查要看匿名访问、topic ACL、消息敏感内容和消费组权限。
