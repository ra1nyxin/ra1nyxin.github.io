# SSH 和 SCP 常用用法

这篇记录 SSH、SCP 的常用命令。远程登录、端口转发、临时传文件、排查连接问题，基本都能从这里改。

## 基础登录

登录远程主机。

```bash
ssh user@example.com
```

指定端口。

```bash
ssh -p 2222 user@example.com
```

指定私钥。

```bash
ssh -i ~/.ssh/id_ed25519 user@example.com
```

打开详细日志。

```bash
ssh -vvv user@example.com
```

## 常用配置

测试配置是否能解析。

```bash
ssh -G myhost
```

生成 ed25519 密钥。

```bash
ssh-keygen -t ed25519 -C "mail@example.com"
```

复制公钥到远程主机。

```bash
ssh-copy-id user@example.com
```

保持连接活跃。

```bash
ssh -o ServerAliveInterval=30 user@example.com
```

## 端口转发

本地端口转发，把本地 8080 转到远端 127.0.0.1:80。

```bash
ssh -L 8080:127.0.0.1:80 user@example.com
```

远程端口转发，把远端 9000 转回本地 3000。

```bash
ssh -R 9000:127.0.0.1:3000 user@example.com
```

SOCKS 代理。

```bash
ssh -D 1080 user@example.com
```

后台建立转发。

```bash
ssh -N -f -L 8080:127.0.0.1:80 user@example.com
```

## SCP 传文件

上传单个文件。

```bash
scp ./file.txt user@example.com:/tmp/file.txt
```

下载单个文件。

```bash
scp user@example.com:/tmp/file.txt ./file.txt
```

上传目录。

```bash
scp -r ./dist user@example.com:/var/www/dist
```

指定端口和私钥。

```bash
scp -P 2222 -i ~/.ssh/id_ed25519 ./file.txt user@example.com:/tmp/file.txt
```

## 常见排查

检查远端端口是否能连。

```bash
ssh -v -p 22 user@example.com
```

禁用公钥认证，临时测试密码登录。

```bash
ssh -o PubkeyAuthentication=no user@example.com
```

指定算法兼容老设备。

```bash
ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedAlgorithms=+ssh-rsa user@example.com
```

## 备注

SSH 问题通常看三处：本地私钥权限、远端 `authorized_keys`、服务端 `sshd_config`。端口转发时要把本地地址、远端地址和监听方向分清楚，命令写错方向会很像网络不通。
