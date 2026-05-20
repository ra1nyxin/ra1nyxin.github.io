# aireplay-ng 使用

aireplay-ng 用于无线测试中的认证、去认证和注入验证。

## 常用命令

```bash
sudo aireplay-ng --test wlan0mon
```

```bash
sudo aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF wlan0mon
```

```bash
sudo aireplay-ng -1 0 -a AA:BB:CC:DD:EE:FF wlan0mon
```

```bash
sudo aireplay-ng -3 -b AA:BB:CC:DD:EE:FF wlan0mon
```

```bash
sudo aireplay-ng -9 wlan0mon
```

小记录：主动无线测试会影响连接，执行前要确认授权和测试窗口。
