# Suricata 常用用法

这篇记录 Suricata 的常用命令。它适合在比赛里对 pcap 跑规则、生成告警和 eve.json，再配合 jq 做过滤。

## 基础运行

检查版本。

```bash
suricata --build-info
```

检查配置。

```bash
suricata -T -c /etc/suricata/suricata.yaml
```

对 pcap 跑检测。

```bash
suricata -r capture.pcap -c /etc/suricata/suricata.yaml -l suricata-out
```

指定规则文件。

```bash
suricata -r capture.pcap -S local.rules -l suricata-out
```

## eve.json 分析

查看告警。

```bash
jq 'select(.event_type=="alert") | {src_ip,dest_ip,signature:.alert.signature,severity:.alert.severity}' suricata-out/eve.json
```

统计签名。

```bash
jq -r 'select(.event_type=="alert") | .alert.signature' suricata-out/eve.json | sort | uniq -c | sort -nr
```

统计源地址。

```bash
jq -r 'select(.event_type=="alert") | .src_ip' suricata-out/eve.json | sort | uniq -c | sort -nr
```

## 规则更新

更新规则。

```bash
suricata-update
```

列出启用源。

```bash
suricata-update list-sources
```

## 小记录

Suricata 适合快速把流量里的高风险行为提出来。告警结果要结合原始 pcap、Zeek 日志和时间线一起看，避免只凭签名下判断。
