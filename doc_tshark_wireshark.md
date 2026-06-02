# tshark 和 Wireshark 抓包笔记

Wireshark 适合细看包，tshark 适合在服务器、跳板机和自动化脚本里抓包、过滤、统计和提取字段。我的习惯是远端用 tshark 抓短样本，拉回本机用 Wireshark 细看。抓包前先明确问题：是没有包进来，握手失败，DNS 解析错，TLS 证书问题，还是应用层返回异常。

先列接口。Linux 上接口名通常直观，Windows 上编号更方便。

```bash
tshark -D
tshark -i eth0
tshark -i 1
```

抓包时建议直接写文件，不要只盯终端滚动。限制数量或时间，避免在生产机器上生成巨大 pcap。

```bash
tshark -i eth0 -w capture.pcapng
tshark -i eth0 -c 500 -w sample.pcapng
tshark -i eth0 -a duration:60 -w one-minute.pcapng
```

捕获过滤 `-f` 在抓包时生效，用的是 BPF 语法，适合减少文件大小。显示过滤 `-Y` 在读取或展示时生效，用的是 Wireshark display filter 语法，字段更丰富。两者不要混用。

```bash
tshark -i eth0 -f "tcp port 443 and host 192.168.1.10" -w tls.pcapng
tshark -r tls.pcapng -Y "tls.handshake"
```

读已有文件时，可以先看前几个包和协议层级，快速判断抓包有没有抓对。

```bash
tshark -r capture.pcapng -c 20
tshark -r capture.pcapng -q -z io,phs
```

常见显示过滤如下。DNS 查询、HTTP 请求、TLS SNI、某个 IP 的流量，都是排障入口。

```bash
tshark -r capture.pcapng -Y "dns.flags.response == 0"
tshark -r capture.pcapng -Y "http.request"
tshark -r capture.pcapng -Y "tls.handshake.extensions_server_name"
tshark -r capture.pcapng -Y "ip.addr == 192.168.1.10"
```

提取字段时用 `-T fields`。默认输出可读性一般，脚本里建议指定分隔符。

```bash
tshark -r capture.pcapng -T fields \
  -e frame.time -e ip.src -e ip.dst -e _ws.col.Protocol -e frame.len
```

提取 HTTP Host 和 URI：

```bash
tshark -r capture.pcapng -Y "http.request" -T fields \
  -e ip.src -e http.host -e http.request.uri
```

提取 DNS 查询名：

```bash
tshark -r capture.pcapng -Y "dns.qry.name" -T fields \
  -e ip.src -e dns.qry.name
```

提取 TLS SNI：

```bash
tshark -r capture.pcapng -Y "tls.handshake.extensions_server_name" -T fields \
  -e ip.dst -e tls.handshake.extensions_server_name
```

会话统计很适合找大流量、异常连接和东西向通信。

```bash
tshark -r capture.pcapng -q -z conv,ip
tshark -r capture.pcapng -q -z conv,tcp
tshark -r capture.pcapng -q -z endpoints,ip
tshark -r capture.pcapng -q -z io,stat,1
```

TCP 问题可以先看重传、乱序和 reset。不要一看到 retransmission 就下结论，少量重传在复杂网络里很常见，关键是比例、方向和时间点。

```bash
tshark -r capture.pcapng -Y "tcp.analysis.retransmission || tcp.analysis.fast_retransmission || tcp.flags.reset == 1"
```

如果要把单个 TCP 流导出来，先在 Wireshark 里找 stream index，或用 tshark 过滤。

```bash
tshark -r capture.pcapng -Y "tcp.stream == 3"
```

权限问题也常见。Linux 上普通用户抓包可能没有权限，可以用 root、dumpcap capabilities，或让运维提前抓好文件。生产环境抓包要控制范围，避免把凭据、Cookie、业务数据一起带走。

我排网络问题一般先问四个问题：包有没有到本机，回包有没有出去，握手在哪一步断，应用层返回了什么。tshark 负责快速把这四个问题变成证据，Wireshark 再用来细看协议字段。
