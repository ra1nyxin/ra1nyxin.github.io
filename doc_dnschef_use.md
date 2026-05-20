# DNSChef 使用

DNSChef 是一个 DNS 代理和伪造工具，适合在实验环境里验证解析链路、应用域名依赖和 DNS 劫持防护。授权测试中要限制监听网卡和目标范围。

## 基础监听

```bash
sudo dnschef --interface 192.168.1.50
```

```bash
sudo dnschef --interface 192.168.1.50 --fakeip 192.168.1.50
```

```bash
sudo dnschef --interface 192.168.1.50 --nameserver 8.8.8.8
```

## 指定域名

```bash
sudo dnschef --interface 192.168.1.50 --fakedomains example.local --fakeip 192.168.1.50
```

```bash
sudo dnschef --interface 192.168.1.50 --truedomains update.example.local
```

```bash
sudo dnschef --interface 192.168.1.50 --file dnschef.ini
```

## 客户端验证

```bash
dig @192.168.1.50 example.local
```

```bash
nslookup example.local 192.168.1.50
```

小记录：DNSChef 的价值在于看客户端会请求哪些域名，以及解析被替换后业务如何反应。测试结束后恢复 DNS 配置。
