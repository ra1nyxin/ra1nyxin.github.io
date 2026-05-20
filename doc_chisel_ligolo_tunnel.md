# Chisel 和 Ligolo-ng 隧道

这篇记录 Chisel、Ligolo-ng 的常用命令。它们适合授权实验环境里的端口转发、内网访问和代理链路整理。

## Chisel 服务端

本机启动反向服务端。

```bash
chisel server -p 8000 --reverse
```

开启 SOCKS5。

```bash
chisel server -p 8000 --reverse --socks5
```

指定认证。

```bash
chisel server -p 8000 --reverse --auth USER:PASSWORD
```

## Chisel 客户端

反向 SOCKS。

```bash
chisel client 192.168.1.5:8000 R:socks
```

反向端口转发。

```bash
chisel client 192.168.1.5:8000 R:127.0.0.1:8080:127.0.0.1:80
```

正向端口转发。

```bash
chisel client 192.168.1.5:8000 127.0.0.1:8080:127.0.0.1:80
```

带认证连接。

```bash
chisel client -auth USER:PASSWORD 192.168.1.5:8000 R:socks
```

## Ligolo-ng 服务端

启动 proxy。

```bash
ligolo-proxy -selfcert
```

指定监听地址。

```bash
ligolo-proxy -selfcert -laddr 0.0.0.0:11601
```

## Ligolo-ng Agent

连接 proxy。

```bash
ligolo-agent -connect 192.168.1.5:11601 -ignore-cert
```

指定接口名启动隧道。

```text
start --tun ligolo
```

添加路由。

```bash
sudo ip route add 10.10.10.0/24 dev ligolo
```

## 备注

隧道排错先看三点：服务端是否监听、客户端是否连上、系统路由是否指向隧道接口。代理类工具跑久了以后，要把端口、路由和目标网段记录清楚。
