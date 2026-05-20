# MQTTX CLI 使用

MQTTX CLI 用于命令行测试 MQTT 连接、订阅和发布。

## 常用命令

```bash
mqttx sub -h 192.168.1.10 -p 1883 -t "#"
```

```bash
mqttx pub -h 192.168.1.10 -p 1883 -t test -m hello
```

```bash
mqttx sub -h 192.168.1.10 -u user -P pass -t "app/#"
```

```bash
mqttx conn -h 192.168.1.10 -p 1883
```

```bash
mqttx sub --protocol mqtts -h broker.example.com -p 8883 -t "#"
```

小记录：适合快速验证 broker 权限，结果要按 topic 和账号区分。
