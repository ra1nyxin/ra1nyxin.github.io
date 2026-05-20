# Zeek 常用用法

这篇记录 Zeek 的常用命令。攻防比赛里经常用它把 pcap 转成结构化日志，再从 conn、dns、http、ssl 这些日志里快速找线索。

## 处理 pcap

解析 pcap。

```bash
zeek -r capture.pcap
```

指定输出目录。

```bash
mkdir zeek-logs && cd zeek-logs && zeek -r ../capture.pcap
```

加载本地脚本解析。

```bash
zeek -r capture.pcap local
```

## 常见日志

查看连接日志。

```bash
head conn.log
```

查看 DNS 查询。

```bash
zeek-cut query < dns.log | sort | uniq -c | sort -nr
```

查看 HTTP Host。

```bash
zeek-cut host uri status_code < http.log
```

查看 TLS SNI。

```bash
zeek-cut server_name < ssl.log | sort | uniq -c | sort -nr
```

## 整理输出

提取源目的地址。

```bash
zeek-cut id.orig_h id.resp_h id.resp_p proto service < conn.log
```

查看大流量连接。

```bash
zeek-cut id.orig_h id.resp_h id.resp_p orig_bytes resp_bytes < conn.log | sort -k4,4nr | head
```

## 备注

Zeek 适合先把流量拆成日志表，再按 DNS、HTTP、TLS、连接量慢慢收窄。比赛里查异常域名、可疑下载、横向连接时很顺手。
