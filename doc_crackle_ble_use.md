# crackle 使用

crackle 用于分析 BLE legacy pairing 捕获，适合实验环境验证配对安全。

## 常用命令

```bash
crackle -i capture.pcap -o decrypted.pcap
```

```bash
crackle -i capture.pcap -l
```

```bash
crackle -i capture.pcap -k TK -o decrypted.pcap
```

```bash
crackle -i capture.pcap -v
```

```bash
tshark -r decrypted.pcap
```

它依赖正确的配对包，采集阶段比破解阶段更容易出问题。
