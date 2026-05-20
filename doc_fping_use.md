# fping 使用

fping 适合快速批量探测主机在线状态，比普通 ping 更适合网段枚举。

## 常用命令

```bash
fping -a -g 192.168.1.0 192.168.1.255
```

```bash
fping -a -f targets.txt
```

```bash
fping -a -q -g 10.0.0.0/24
```

```bash
fping -r1 -t500 -a -f targets.txt
```

```bash
fping -u -f targets.txt
```

ICMP 被限制时结果会偏少，要结合 TCP ping 和 ARP 发现。
