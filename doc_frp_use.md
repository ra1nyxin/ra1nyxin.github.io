# frp 使用

frp 用于内网穿透和反向代理，适合授权实验里的临时服务暴露。使用前要明确服务端、客户端、端口和认证方式，避免留下长期可用入口。

## 服务端和客户端

```bash
frps -c frps.ini
```

```bash
frpc -c frpc.ini
```

```bash
frpc status -c frpc.ini
```

先启动服务端，再启动客户端。状态命令适合确认代理是否连上、端口是否生效。

## 临时代理

```bash
frpc http -s server:7000 -l 80 --sd subdomain
```

```bash
frpc tcp -s server:7000 -l 22 -r 6000
```

HTTP 适合临时暴露 Web 服务，TCP 适合转发特定端口。真实环境里要限制访问来源，别把管理端口直接暴露到公网。

## 习惯

配置里避免写长期凭据，测试完成后关闭 server 和 client。记录开放时间、远端端口、目标服务和清理动作，后面复盘才知道有没有遗留。
