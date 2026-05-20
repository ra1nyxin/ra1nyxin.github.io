# iodine 使用

iodine 用于 DNS 隧道实验，适合验证 DNS 出口策略。

## 常用命令

```bash
iodined -f -c -P pass 10.0.0.1 tunnel.example.com
```

```bash
iodine -f -P pass tunnel.example.com
```

```bash
iodine -f -r -P pass tunnel.example.com
```

```bash
dig tunnel.example.com NS
```

```bash
tcpdump -i eth0 udp port 53
```

DNS 隧道容易影响监控告警，授权测试要限制域名和时间窗口。
