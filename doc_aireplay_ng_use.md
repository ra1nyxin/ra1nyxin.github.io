# aireplay-ng 使用

aireplay-ng 更像无线测试里的动作工具。它负责把认证、去认证、重放和注入这些动作做出来，再看环境会怎么响应。

## 动作

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

`--test` 适合先看接口状态和注入条件。后面的去认证、关联和 ARP 重放，都应该先确认目标 BSSID、信道和测试窗口，不然结果会很乱。

## 观察点

注入不一定成功，成功了也不等于路径就对。客户端是否重新连上、AP 是否掉包、周围是否有别的信号干扰，这些都会影响你对结果的判断。

## 场景

如果只是想验证链路能不能打通，先从最轻的动作开始。真正需要连续重放的时候，再去看包数量、速率和客户端是否还能稳定响应。

## 习惯

这种命令最好和 airodump-ng 配合看，单独跑动作很容易看漏上下文。实验里记下目标、时间和信道，后面复盘会省很多事。
