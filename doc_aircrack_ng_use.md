# aircrack-ng 使用

aircrack-ng 是无线测试里很老但很稳的一套工具。它最常见的用途是看握手包、验证密码字典、确认某个捕获包能不能继续往下处理。

## 验证

```bash
aircrack-ng capture.cap
```

```bash
aircrack-ng -w wordlist.txt capture.cap
```

```bash
aircrack-ng -b AA:BB:CC:DD:EE:FF -w wordlist.txt capture.cap
```

握手包是否完整，先跑一次就能知道。BSSID 固定下来以后，输出会更好读，特别是一个包里混了多个 AP 的时候。

## 细节

```bash
aircrack-ng -a2 -w wordlist.txt capture.cap
```

```bash
aircrack-ng -J hash capture.cap
```

`-a2` 常用来锁定 WPA2 场景，`-J` 则适合把结果转成后续工具还能吃的格式。实际用的时候，字典质量比命令本身更重要，命令只是把流程走通。

## 记法

无线测试要先确认授权范围、频段和 BSSID。包抓回来以后，把信道、抓包时间和客户端数量也一起记上，不然过一阵子很容易忘记为什么那次能跑通、这次却不行。
