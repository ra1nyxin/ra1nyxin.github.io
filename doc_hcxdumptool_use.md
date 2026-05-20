# hcxdumptool 使用

hcxdumptool 用于采集 WiFi 认证材料，常配合 hcxpcapngtool 和 hashcat。

## 常用命令

```bash
sudo hcxdumptool -i wlan0mon -o capture.pcapng
```

```bash
sudo hcxdumptool -i wlan0mon -o capture.pcapng --enable_status=1
```

```bash
sudo hcxdumptool -i wlan0mon -o capture.pcapng --filterlist_ap=targets.txt --filtermode=2
```

```bash
sudo hcxdumptool -i wlan0mon --do_rcascan
```

```bash
sudo hcxdumptool -I
```

采集前先确认网卡驱动和监管域设置，结果要按 BSSID 分类保存。
