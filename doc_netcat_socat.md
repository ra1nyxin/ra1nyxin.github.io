# netcat 和 socat 常用用法

这篇记录 nc、ncat、socat 的常用命令。它们适合做端口连通性验证、临时监听、简单传输和协议调试。

## nc 连接测试

测试 TCP 端口。

```bash
nc -vz example.com 443
```

连接到服务并手动输入内容。

```bash
nc example.com 80
```

设置超时。

```bash
nc -w 3 -vz example.com 443
```

扫描一小段端口。

```bash
nc -vz example.com 20-25
```

## nc 监听

监听本地端口。

```bash
nc -l 9000
```

监听并保存收到的数据。

```bash
nc -l 9000 > received.bin
```

发送文件。

```bash
nc 192.168.1.10 9000 < file.bin
```

## HTTP 手工请求

手动发 HTTP 请求。

```bash
printf "GET / HTTP/1.1\r\nHost: example.com\r\nConnection: close\r\n\r\n" | nc example.com 80
```

查看 banner。

```bash
printf "\r\n" | nc -w 3 example.com 25
```

## socat 基础

监听 TCP 并打印数据。

```bash
socat -v TCP-LISTEN:9000,reuseaddr,fork -
```

连接 TCP 服务。

```bash
socat - TCP:example.com:80
```

端口转发。

```bash
socat TCP-LISTEN:8080,reuseaddr,fork TCP:127.0.0.1:80
```

本地 TCP 转 Unix Socket。

```bash
socat TCP-LISTEN:2375,reuseaddr,fork UNIX-CONNECT:/var/run/docker.sock
```

## TLS 测试

用 ncat 连接 TLS。

```bash
ncat --ssl example.com 443
```

用 socat 连接 TLS。

```bash
socat - OPENSSL:example.com:443,verify=0
```

## 小记录

nc 适合快速确认端口和发简单明文请求。socat 参数更长，但能处理转发、Unix Socket、TLS 和复杂桥接。临时监听端口时要留意机器的防火墙和安全组。
