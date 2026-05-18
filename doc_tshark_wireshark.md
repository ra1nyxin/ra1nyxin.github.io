# tshark 和 Wireshark 抓包

这篇记录 tshark 的常用命令。图形界面适合细看包，命令行适合远程机器、服务器、批量过滤和把结果丢进脚本。

## 查看网卡

列出可抓包接口。

```bash
tshark -D
```

Windows 上接口名有时很长，先列出来再复制编号会省事。

```bash
tshark -i 1
```

## 基础抓包

抓指定接口。

```bash
tshark -i eth0
```

抓包并保存到文件。

```bash
tshark -i eth0 -w capture.pcapng
```

限制抓包数量，适合做一个短样本。

```bash
tshark -i eth0 -c 200 -w sample.pcapng
```

按时间停止。

```bash
tshark -i eth0 -a duration:60 -w one-minute.pcapng
```

## 读取已有包

读取 pcap 文件。

```bash
tshark -r capture.pcapng
```

只显示前 20 个包。

```bash
tshark -r capture.pcapng -c 20
```

显示协议层级统计。

```bash
tshark -r capture.pcapng -q -z io,phs
```

## 捕获过滤和显示过滤

捕获过滤在抓包时生效，适合减少文件大小。

```bash
tshark -i eth0 -f "tcp port 443" -w tls.pcapng
```

显示过滤在读取时生效，适合分析已有文件。

```bash
tshark -r capture.pcapng -Y "http.request"
```

筛选 DNS 查询。

```bash
tshark -r capture.pcapng -Y "dns.flags.response == 0"
```

筛选某个 IP 的流量。

```bash
tshark -r capture.pcapng -Y "ip.addr == 192.168.1.10"
```

## 提取字段

提取源 IP、目的 IP、协议和长度。

```bash
tshark -r capture.pcapng -T fields -e ip.src -e ip.dst -e _ws.col.Protocol -e frame.len
```

提取 HTTP Host 和 URI。

```bash
tshark -r capture.pcapng -Y "http.request" -T fields -e http.host -e http.request.uri
```

提取 DNS 查询名。

```bash
tshark -r capture.pcapng -Y "dns.qry.name" -T fields -e dns.qry.name
```

提取 TLS SNI。

```bash
tshark -r capture.pcapng -Y "tls.handshake.extensions_server_name" -T fields -e ip.dst -e tls.handshake.extensions_server_name
```

## 会话和统计

查看 TCP 会话。

```bash
tshark -r capture.pcapng -q -z conv,tcp
```

查看 IP 会话。

```bash
tshark -r capture.pcapng -q -z conv,ip
```

按时间统计流量。

```bash
tshark -r capture.pcapng -q -z io,stat,1
```

## 小记录

远程服务器上先用 tshark 抓短样本，再把 pcap 拉回本机用 Wireshark 细看，通常效率最高。过滤表达式写复杂时，先在 Wireshark 顶部过滤栏里试通，再复制到 tshark 命令里。
