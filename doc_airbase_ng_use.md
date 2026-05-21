# airbase-ng 使用

airbase-ng 适合搭实验 AP。它的用途很明确，主要是观察客户端在弱网、仿冒 SSID 或异常认证条件下的反应。

## 起 AP

```bash
sudo airbase-ng -e TestAP -c 6 wlan0mon
```

```bash
sudo airbase-ng -a AA:BB:CC:DD:EE:FF -e TestAP wlan0mon
```

```bash
sudo airbase-ng --essid TestAP --channel 6 wlan0mon
```

ESSID 和信道最好先固定，后面看日志会清楚很多。测试里如果要模拟特定 BSSID，把 MAC 一起写进去，后面和周边 AP 区分会容易得多。

## 看行为

```bash
sudo airbase-ng -P -C 30 -e TestAP wlan0mon
```

```bash
brctl show
```

它更像把客户端行为摆到眼前。谁去连、连几次、会不会自动重连、桥接后的流量有没有正常走，这些都值得记下来。

## 记录点

启动时间、信道、BSSID、客户端 MAC、是否有断连重连，都可以记在同一份笔记里。后面回看时，这些细节比单纯的输出文本更有用。

## 习惯

只在实验和授权测试里用。真实环境里如果看到客户端自己跳进来，先别急着下结论，周边 AP、信号强度和客户端保存的配置都会影响结果。
