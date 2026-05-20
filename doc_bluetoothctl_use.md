# bluetoothctl 使用

bluetoothctl 是 Linux 蓝牙管理工具，适合蓝牙设备发现、配对和基础检查。

## 常用命令

```bash
bluetoothctl
```

```bash
bluetoothctl scan on
```

```bash
bluetoothctl devices
```

```bash
bluetoothctl info AA:BB:CC:DD:EE:FF
```

```bash
bluetoothctl pair AA:BB:CC:DD:EE:FF
```

蓝牙测试要记录设备地址、名称、RSSI 和服务 UUID，避免只写显示名。
