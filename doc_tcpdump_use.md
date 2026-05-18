# tcpdump 常用用法

这篇记录 tcpdump 的常用命令。服务器上没有图形界面时，它是最直接的抓包工具。抓到的 pcap 可以拉回本机用 Wireshark 继续看。

## 查看接口

列出可用接口。

```bash
tcpdump -D
```

监听指定接口。

```bash
tcpdump -i eth0
```

不解析域名和端口名，输出更干净。

```bash
tcpdump -i eth0 -nn
```

## 保存抓包

保存到 pcap 文件。

```bash
tcpdump -i eth0 -nn -w capture.pcap
```

限制抓包数量。

```bash
tcpdump -i eth0 -nn -c 200 -w sample.pcap
```

按文件大小轮转。

```bash
tcpdump -i eth0 -nn -C 100 -W 5 -w capture.pcap
```

## 常见过滤

抓某个主机。

```bash
tcpdump -i eth0 -nn host 192.168.1.10
```

抓源地址。

```bash
tcpdump -i eth0 -nn src host 192.168.1.10
```

抓目标地址。

```bash
tcpdump -i eth0 -nn dst host 192.168.1.10
```

抓端口。

```bash
tcpdump -i eth0 -nn port 443
```

抓 TCP。

```bash
tcpdump -i eth0 -nn tcp
```

抓 UDP DNS。

```bash
tcpdump -i eth0 -nn udp port 53
```

## HTTP 和 TLS 排查

抓 HTTP 明文请求。

```bash
tcpdump -i eth0 -nn -A tcp port 80
```

抓 TLS 握手相关流量。

```bash
tcpdump -i eth0 -nn tcp port 443 -w tls.pcap
```

抓某个服务和某个目标之间的通信。

```bash
tcpdump -i eth0 -nn host 192.168.1.10 and port 443
```

## 读取 pcap

读取抓包文件。

```bash
tcpdump -nn -r capture.pcap
```

读取文件并过滤端口。

```bash
tcpdump -nn -r capture.pcap port 53
```

读取文件并打印 ASCII。

```bash
tcpdump -nn -A -r capture.pcap
```

## 小记录

tcpdump 适合抓“刚好够用”的包。抓之前先写清楚要确认什么，再决定接口、主机、端口和数量。线上机器尽量加 `-c` 或轮转参数，避免文件把磁盘打满。
