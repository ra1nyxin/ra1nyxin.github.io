# redsocks 使用

redsocks 可把透明代理流量转到 SOCKS/HTTP 代理，适合实验环境流量转发。

## 常用命令

```bash
redsocks -c redsocks.conf
```

```bash
sudo iptables -t nat -A OUTPUT -p tcp -j REDIRECT --to-ports 12345
```

```bash
sudo iptables -t nat -L -n -v
```

```bash
sudo systemctl restart redsocks
```

```bash
curl --interface lo http://example.com
```

配置前先画清流量路径，避免把系统流量意外转走。
