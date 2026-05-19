# Snort 常用用法

这篇记录 Snort 的常用命令。它适合对 pcap 或实时流量跑 IDS 规则，比赛里常用于验证规则命中和告警内容。

## 基础检查

查看版本。

```bash
snort -V
```

测试配置。

```bash
snort -T -c /etc/snort/snort.conf
```

查看接口。

```bash
snort -W
```

## 跑 pcap

用配置检测 pcap。

```bash
snort -r capture.pcap -c /etc/snort/snort.conf -A console
```

使用本地规则。

```bash
snort -r capture.pcap -c /etc/snort/snort.conf -R local.rules -A console
```

输出到目录。

```bash
snort -r capture.pcap -c /etc/snort/snort.conf -l snort-out
```

## 常见输出

快速看告警。

```bash
cat snort-out/alert
```

按签名统计。

```bash
grep "\\[\\*\\*\\]" snort-out/alert | sort | uniq -c | sort -nr
```

## 小记录

Snort 适合验证规则写法和快速跑旧规则集。比赛里如果已经有 pcap，先离线跑一遍，再根据告警时间点回到 Wireshark 或 Zeek 日志里看上下文。
