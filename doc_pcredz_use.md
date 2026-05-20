# Pcredz 使用

Pcredz 用来从 pcap 或 live 流量中提取明文凭据、哈希和认证痕迹。适合比赛取证、内网流量复盘和授权抓包后的快速筛查。

## 离线解析

```bash
python3 Pcredz -f capture.pcap
```

```bash
python3 Pcredz -f capture.pcapng
```

```bash
python3 Pcredz -d pcaps/
```

## 实时监听

```bash
sudo python3 Pcredz -i eth0
```

```bash
sudo python3 Pcredz -i eth0 -v
```

```bash
sudo tcpdump -i eth0 -w auth_traffic.pcap
```

## 结果整理

```bash
grep -R "Credential" . -n
```

```bash
strings capture.pcap | grep -Ei "user|pass|login|authorization"
```

Pcredz 很适合做第一轮筛查。结果里出现的账号、来源 IP、协议和时间点要一起记录，方便回到原始 pcap 复核。
