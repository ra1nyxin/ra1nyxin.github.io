# pwncat-cs 常用用法

pwncat-cs 适合管理 shell、升级 TTY、传文件和基础枚举。常用参数：`-lp` 监听，目标连接，内置命令在会话里执行。

```bash
pwncat-cs -lp 4444
```

```bash
pwncat-cs 192.168.1.10 4444
```

```text
upload local.txt /tmp/local.txt
```

```text
download /etc/passwd passwd.txt
```

pwncat-cs 比普通 nc 更适合长期维护实验 shell。进入会话后先升级交互和记录当前主机信息。
