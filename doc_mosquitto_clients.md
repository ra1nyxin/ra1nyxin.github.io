# mosquitto 客户端

mosquitto_sub 和 mosquitto_pub 用于 MQTT 测试，适合物联网和消息服务检查。

## 常用命令

```bash
mosquitto_sub -h 192.168.1.10 -t "#" -v
```

```bash
mosquitto_sub -h 192.168.1.10 -u user -P pass -t "sensors/#" -v
```

```bash
mosquitto_pub -h 192.168.1.10 -t test/topic -m hello
```

```bash
mosquitto_sub -h 192.168.1.10 -p 8883 --cafile ca.crt -t "#"
```

```bash
nmap -sV -p 1883,8883 192.168.1.10
```

小记录：MQTT 风险要看匿名订阅、通配符权限、TLS 和消息里是否有敏感设备信息。
