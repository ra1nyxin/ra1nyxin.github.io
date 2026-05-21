# netdiscover 使用

netdiscover 用于被动或主动发现局域网主机。刚接入内网、靶场或实验网段时，它可以快速给出 IP、MAC 和厂商线索。

## 主动发现

```bash
sudo netdiscover -i eth0
```

```bash
sudo netdiscover -r 192.168.1.0/24
```

```bash
sudo netdiscover -i eth0 -r 192.168.1.0/24
```

主动模式适合快速扫网段。先确认网卡和网段，避免在错误接口上等半天。

## 被动和速度

```bash
sudo netdiscover -p
```

```bash
sudo netdiscover -s 10 -r 192.168.1.0/24
```

被动模式更安静，适合先观察环境。`-s` 调整扫描速度，网络质量差时不要调得太快。

## 复核

结果要和 DHCP、ARP 表、网关信息交叉确认。MAC 厂商只能作为线索，不能直接当资产类型结论。
