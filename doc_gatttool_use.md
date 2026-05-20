# gatttool 使用

gatttool 用于 BLE GATT 服务枚举，适合老环境和兼容性测试。

## 常用命令

```bash
gatttool -b AA:BB:CC:DD:EE:FF -I
```

```bash
gatttool -b AA:BB:CC:DD:EE:FF --primary
```

```bash
gatttool -b AA:BB:CC:DD:EE:FF --characteristics
```

```bash
gatttool -b AA:BB:CC:DD:EE:FF --char-read -a 0x0025
```

```bash
gatttool -b AA:BB:CC:DD:EE:FF --char-write-req -a 0x0025 -n 0100
```

BLE 写入测试要非常谨慎，先确认 handle 和属性权限。
