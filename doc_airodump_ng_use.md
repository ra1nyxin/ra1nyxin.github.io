# airodump-ng 使用

airodump-ng 是无线侧最常先开的窗口。它负责看 AP、看客户端、看信道、看握手包，也负责给后面的动作工具提供上下文。

## 监听

```bash
sudo airodump-ng wlan0mon
```

```bash
sudo airodump-ng --bssid AA:BB:CC:DD:EE:FF --channel 6 -w capture wlan0mon
```

```bash
sudo airodump-ng --band abg wlan0mon
```

固定信道以后，画面会安静很多。只盯单个 AP 时，把 BSSID 和 channel 锁住，其他噪声会少很多。

## 输出

```bash
sudo airodump-ng --write scan --output-format pcap,csv wlan0mon
```

```bash
sudo airodump-ng --essid TargetWiFi -w target wlan0mon
```

CSV 对整理很有用，AP、客户端、抓包数量和握手状态一眼能看出来。要留档的话，pcap 和 csv 最好一起存，不然后面还得重新抓上下文。

## 观察点

信道跳动、客户端离开、握手不完整，这些信息要放在一起看。只盯某一列很容易误判，特别是现场环境里同时有多个 AP 的时候。

## 习惯

它是个看全局的工具，后面要不要继续跑 aireplay-ng 或 aircrack-ng，往往就看这一步的上下文够不够完整。
