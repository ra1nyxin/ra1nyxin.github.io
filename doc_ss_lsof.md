# ss 和 lsof 常用用法

这篇记录端口、连接和进程排查常用命令。`ss` 适合看网络连接，`lsof` 适合从端口反查进程或从进程反查文件。

## ss 查看端口

查看监听端口。

```bash
ss -lntp
```

查看 UDP 监听。

```bash
ss -lnup
```

查看所有 TCP 连接。

```bash
ss -antp
```

查看某个端口。

```bash
ss -lntp sport = :8080
```

查看到某个目标的连接。

```bash
ss -antp dst 192.168.1.10
```

## ss 统计

查看 socket 统计。

```bash
ss -s
```

查看 TIME-WAIT。

```bash
ss -ant state time-wait
```

查看 ESTABLISHED。

```bash
ss -ant state established
```

## lsof 查端口

查看占用 8080 的进程。

```bash
lsof -i :8080
```

查看 TCP 连接。

```bash
lsof -iTCP
```

查看监听端口。

```bash
lsof -iTCP -sTCP:LISTEN
```

查看某个进程打开的文件。

```bash
lsof -p 1234
```

## 文件和目录占用

查看谁占用某个文件。

```bash
lsof /var/log/syslog
```

查看谁在使用某个目录。

```bash
lsof +D /var/www
```

查看已删除但还被进程占用的文件。

```bash
lsof +L1
```

## 小记录

端口冲突先用 `ss -lntp` 看监听，再用 `lsof -i :PORT` 反查进程。磁盘空间莫名其妙不释放时，`lsof +L1` 经常能找到已经删除但仍被进程占着的日志文件。
