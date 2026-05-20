# Bettercap 使用

Bettercap 适合内网流量观察、ARP 欺骗验证、WiFi 辅助测试和协议探测。授权测试里建议从被动观察开始，再进入主动模块。

## 启动和发现

```bash
sudo bettercap -iface eth0
```

```bash
sudo bettercap -iface wlan0
```

```bash
net.probe on
```

## ARP 与嗅探

```bash
set arp.spoof.targets 192.168.1.10
```

```bash
arp.spoof on
```

```bash
net.sniff on
```

## caplet 使用

```bash
sudo bettercap -iface eth0 -caplet http-ui
```

```bash
sudo bettercap -iface eth0 -eval "net.probe on; ticker on"
```

Bettercap 主动模块影响网络流量，比赛和授权评估里都要控制目标范围。抓到的凭据类信息要回到原始包里复核。
