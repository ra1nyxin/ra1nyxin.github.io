# Scapy 使用

Scapy 适合交互式构造和解析网络包，用于协议实验和验证边界设备行为。

## 常用命令

```bash
scapy
```

```bash
python3 -c "from scapy.all import *; sr1(IP(dst=\"192.168.1.10\")/ICMP())"
```

```bash
python3 -c "from scapy.all import *; sr1(IP(dst=\"192.168.1.10\")/TCP(dport=80,flags=\"S\"))"
```

```bash
python3 -c "from scapy.all import *; sniff(count=10)"
```

```bash
python3 -c "from scapy.all import *; wrpcap(\"out.pcap\", sniff(count=10))"
```

小记录：适合做小规模验证，复杂流量测试要写脚本并保存 pcap。
