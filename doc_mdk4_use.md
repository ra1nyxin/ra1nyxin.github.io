# mdk4 使用

mdk4 用于无线压力和协议行为测试，适合实验室验证防护能力。

## 常用命令

```bash
sudo mdk4 wlan0mon b
```

```bash
sudo mdk4 wlan0mon d -B AA:BB:CC:DD:EE:FF
```

```bash
sudo mdk4 wlan0mon a -a AA:BB:CC:DD:EE:FF
```

```bash
sudo mdk4 wlan0mon p
```

```bash
sudo mdk4 wlan0mon m
```

主动压力测试只适合隔离环境或明确授权窗口，记录信道和目标 BSSID。
