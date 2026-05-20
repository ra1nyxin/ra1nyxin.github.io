# airbase-ng 使用

airbase-ng 用于实验环境搭建 AP 和验证客户端连接行为。

## 常用命令

```bash
sudo airbase-ng -e TestAP -c 6 wlan0mon
```

```bash
sudo airbase-ng -a AA:BB:CC:DD:EE:FF -e TestAP wlan0mon
```

```bash
sudo airbase-ng -P -C 30 -e TestAP wlan0mon
```

```bash
sudo airbase-ng --essid TestAP --channel 6 wlan0mon
```

```bash
brctl show
```

适合实验 Rogue AP 防护和客户端自动连接策略，生产环境要避免误导真实用户。
