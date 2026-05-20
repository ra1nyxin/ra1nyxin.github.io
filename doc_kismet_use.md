# Kismet 使用

Kismet 用于无线被动发现和监控，适合 WiFi 与部分蓝牙环境观察。

## 常用命令

```bash
kismet
```

```bash
kismet -c wlan0mon
```

```bash
kismet -c wlan0mon:name=wifi0
```

```bash
kismet_server -c wlan0mon
```

```bash
kismetdb_to_pcap --in capture.kismet --out capture.pcapng
```

小记录：适合长期被动观察，输出数据库要和时间、地点、天线配置一起记录。
