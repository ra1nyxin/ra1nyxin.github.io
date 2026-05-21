# fping 使用

fping 适合快速批量探测主机在线状态，比普通 `ping` 更适合网段枚举和资产初筛。

## 网段探测

```bash
fping -a -g 192.168.1.0 192.168.1.255
```

```bash
fping -a -q -g 10.0.0.0/24
```

```bash
fping -r1 -t500 -a -g 10.0.0.0/24
```

`-a` 只显示在线主机，`-q` 减少输出，`-r` 和 `-t` 控制重试和超时。跨网段探测时超时别设得太低。

## 目标文件

```bash
fping -a -f targets.txt
```

```bash
fping -r1 -t500 -a -f targets.txt
```

```bash
fping -u -f targets.txt
```

目标文件适合复用资产列表。`-u` 看不可达主机，排查清单缺口时有用。

## 复核

ICMP 被限制时结果会偏少，要结合 TCP 探测、ARP 发现和端口扫描。fping 适合做第一轮，不适合作为最终资产存活结论。
