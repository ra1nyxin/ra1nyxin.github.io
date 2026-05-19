# masscan 和 zmap 常用用法

这篇记录 masscan、zmap 的常用命令。它们适合在授权范围内做高速端口探测，使用时要严格控制范围和速率。

## masscan

扫描单个网段端口。

```bash
sudo masscan 192.168.1.0/24 -p80,443 --rate 1000
```

扫描端口范围。

```bash
sudo masscan 192.168.1.0/24 -p1-1000 --rate 1000
```

输出列表。

```bash
sudo masscan 192.168.1.0/24 -p80,443 --rate 1000 -oL masscan.lst
```

输出 JSON。

```bash
sudo masscan 192.168.1.0/24 -p80,443 --rate 1000 -oJ masscan.json
```

## zmap

扫描 80 端口。

```bash
sudo zmap -p 80 192.168.1.0/24 -r 1000
```

保存结果。

```bash
sudo zmap -p 443 192.168.1.0/24 -r 1000 -o zmap.txt
```

排除地址。

```bash
sudo zmap -p 80 192.168.1.0/24 -b blacklist.txt -r 1000
```

## 小记录

高速扫描工具适合大范围授权资产探测。比赛环境里也要先确认范围、速率和时间窗口，结果再交给 Nmap 或 httpx 做详细识别。
