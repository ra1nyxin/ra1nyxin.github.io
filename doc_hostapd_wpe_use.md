# hostapd-wpe 使用

hostapd-wpe 用于企业无线 EAP 实验环境，适合验证客户端配置缺陷。

## 常用命令

```bash
sudo hostapd-wpe hostapd-wpe.conf
```

```bash
tail -f hostapd-wpe.log
```

```bash
asleap -C challenge -R response -W wordlist.txt
```

```bash
openssl x509 -in server.pem -text -noout
```

```bash
iw dev wlan0 set channel 6
```

风险重点在客户端是否校验证书链和服务器名，测试结果要写清 EAP 类型。
