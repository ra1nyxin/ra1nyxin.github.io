# RustScan 常用用法

这篇记录 RustScan 的常用命令。它适合快速发现端口，再把结果交给 Nmap 做详细识别。

## 基础扫描

扫描目标。

```bash
rustscan -a 192.168.1.10
```

指定端口范围。

```bash
rustscan -a 192.168.1.10 -r 1-65535
```

限制批量大小。

```bash
rustscan -a 192.168.1.10 -b 500
```

设置超时。

```bash
rustscan -a 192.168.1.10 -t 1500
```

## 交给 Nmap

追加 Nmap 参数。

```bash
rustscan -a 192.168.1.10 -- -sV -sC
```

指定 UDP 之外的常见 TCP 扫描。

```bash
rustscan -a 192.168.1.10 --ulimit 5000 -- -sV
```

保存输出。

```bash
rustscan -a 192.168.1.10 -- -sV -oN rustscan-nmap.txt
```

## 小记录

RustScan 的定位是快速找端口。比赛里先用它跑一遍，再用 Nmap 精扫开放端口，会比直接全量服务识别快很多。
