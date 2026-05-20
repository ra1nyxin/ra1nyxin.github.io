# frp 使用

frp 用于内网穿透和反向代理，适合授权实验里的临时服务暴露。

## 常用命令

```bash
frps -c frps.ini
```

```bash
frpc -c frpc.ini
```

```bash
frpc http -s server:7000 -l 80 --sd subdomain
```

```bash
frpc tcp -s server:7000 -l 22 -r 6000
```

```bash
frpc status -c frpc.ini
```

配置里避免写真实长期凭据，测试完成后关闭 server 和 client。
