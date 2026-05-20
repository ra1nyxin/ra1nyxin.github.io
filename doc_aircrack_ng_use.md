# aircrack-ng 使用

aircrack-ng 用于 WiFi 握手包验证和密码强度测试。

## 常用命令

```bash
aircrack-ng capture.cap
```

```bash
aircrack-ng -w wordlist.txt capture.cap
```

```bash
aircrack-ng -b AA:BB:CC:DD:EE:FF -w wordlist.txt capture.cap
```

```bash
aircrack-ng -a2 -w wordlist.txt capture.cap
```

```bash
aircrack-ng -J hash capture.cap
```

无线测试要提前确认频段、BSSID 和授权范围，避免干扰邻近网络。
