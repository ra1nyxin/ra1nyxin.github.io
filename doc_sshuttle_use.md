# sshuttle 常用用法

sshuttle 适合通过 SSH 做透明代理。常用参数：`-r` 跳板账号，后面跟目标网段，`--dns` 代理 DNS。

```bash
sshuttle -r user@jump.example.com 10.10.10.0/24
```

```bash
sshuttle -r user@jump.example.com 10.10.10.0/24 --dns
```

```bash
sshuttle -r user@jump.example.com 0.0.0.0/0
```

```bash
sshuttle -r user@jump.example.com 10.10.10.0/24 -x 10.10.10.5
```

小记录：sshuttle 适合 Linux/macOS 上快速进内网。它依赖 SSH 权限，适合比赛里已有跳板账号的场景。
