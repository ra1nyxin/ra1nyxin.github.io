# arp-scan 使用

arp-scan 用于二层网络发现，适合内网资产初筛。

## 常用命令

```bash
sudo arp-scan -l
```

```bash
sudo arp-scan --interface eth0 192.168.1.0/24
```

```bash
sudo arp-scan --localnet --retry=3
```

```bash
sudo arp-scan --plain 192.168.1.0/24
```

```bash
sudo arp-scan -l | tee arp-scan.txt
```

小记录：它只覆盖本二层网络，跨网段发现要换路由层扫描方法。
