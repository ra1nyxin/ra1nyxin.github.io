# Ettercap 使用

Ettercap 常用于局域网 MITM 验证、协议观察和 ARP 欺骗测试。它老但直接，适合快速确认二层防护是否生效。

## 文本模式

```bash
sudo ettercap -T -i eth0
```

```bash
sudo ettercap -T -q -i eth0 -M arp:remote /192.168.1.10// /192.168.1.1//
```

```bash
sudo ettercap -T -q -i eth0 -M arp:remote /192.168.1.0/24// /192.168.1.1//
```

## 插件和过滤

```bash
ettercap -P list
```

```bash
sudo ettercap -T -i eth0 -P dns_spoof
```

```bash
etterfilter filter.ecf -o filter.ef
```

## 抓包配合

```bash
sudo tcpdump -i eth0 -w mitm.pcap
```

小记录：Ettercap 测试前先确认网关和目标 IP，结束后检查 ARP 表是否恢复。交换机侧的动态 ARP 检测能明显改变结果。
