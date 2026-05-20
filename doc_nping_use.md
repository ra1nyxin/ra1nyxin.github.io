# nping 使用

nping 是 Nmap 套件里的包生成和探测工具，适合连通性与防火墙测试。

## 常用命令

```bash
nping --tcp -p 80 192.168.1.10
```

```bash
nping --udp -p 53 192.168.1.10
```

```bash
nping --icmp 192.168.1.10
```

```bash
nping --tcp -p 443 --flags syn 192.168.1.10
```

```bash
nping --rate 5 --count 10 --tcp -p 80 192.168.1.10
```

输出比普通 ping 更适合分析过滤策略，记录时写清协议、端口和 flags。
