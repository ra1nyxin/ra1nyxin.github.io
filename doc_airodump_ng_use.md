# airodump-ng 使用

airodump-ng 用于监听 WiFi 网络和采集握手包。

## 常用命令

```bash
sudo airodump-ng wlan0mon
```

```bash
sudo airodump-ng --bssid AA:BB:CC:DD:EE:FF --channel 6 -w capture wlan0mon
```

```bash
sudo airodump-ng --band abg wlan0mon
```

```bash
sudo airodump-ng --write scan --output-format pcap,csv wlan0mon
```

```bash
sudo airodump-ng --essid TargetWiFi -w target wlan0mon
```

采集前先固定信道，输出的 CSV 对整理 AP 和客户端很有用。
