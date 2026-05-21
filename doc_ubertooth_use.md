# Ubertooth 工具使用

Ubertooth 常用于蓝牙实验、BLE 嗅探和 2.4GHz 频段观察。硬件状态、固件版本、天线和距离都会影响结果，记录时要把环境写清楚。

## 设备检查

```bash
ubertooth-util -v
```

```bash
ubertooth-util -i
```

先确认设备能识别、固件版本正常，再开始抓包。固件太旧时，很多异常表现看起来像目标问题，实际只是工具链问题。

## BLE 和扫描

```bash
ubertooth-btle -f -c capture.pcap
```

```bash
ubertooth-scan
```

```bash
ubertooth-rx
```

抓到的 pcap 可以交给 Wireshark 看。BLE 结果要结合频道、距离、发包间隔和目标设备状态判断，单次捕获不稳定很常见。

## 频谱观察

```bash
ubertooth-specan-ui
```

```bash
ubertooth-specan
```

频谱界面适合先看周围干扰。测试现场如果 WiFi、蓝牙设备很多，先看频段拥挤程度，再解释丢包和抓不到包的问题。

## 记录重点

记录设备型号、固件版本、天线、距离、频道、目标设备状态和捕获时间。无线实验复现难度高，少写一个环境条件，后面就很难判断差异来源。
