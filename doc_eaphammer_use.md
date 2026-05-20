# EAPHammer 使用

EAPHammer 用于企业 WiFi EAP 实验和防护验证。

## 常用命令

```bash
sudo eaphammer --cert-wizard
```

```bash
sudo eaphammer -i wlan0 --channel 6 --auth wpa-eap --essid CorpWiFi --creds
```

```bash
sudo eaphammer -i wlan0 --auth wpa-eap --essid CorpWiFi --negotiate balanced
```

```bash
sudo eaphammer --bootstrap
```

```bash
sudo eaphammer --list-creds
```

小记录：企业无线测试要提前做告知和隔离，重点验证客户端证书校验策略。
