# BLEAH 使用

BLEAH 用于 BLE 设备扫描和 GATT 枚举，适合低功耗蓝牙安全测试。

## 常用命令

```bash
bleah -b AA:BB:CC:DD:EE:FF -e
```

```bash
bleah -b AA:BB:CC:DD:EE:FF -s
```

```bash
bleah -b AA:BB:CC:DD:EE:FF -r 0x0025
```

```bash
bleah -b AA:BB:CC:DD:EE:FF -w 0x0025 -d 0100
```

```bash
bleah -t0
```

记录时把服务 UUID、characteristic、属性和读取结果分开写。
