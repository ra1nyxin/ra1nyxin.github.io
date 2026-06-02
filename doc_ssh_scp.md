# SSH 和 SCP 使用笔记

SSH 是远程登录、临时转发、跳板访问和自动化运维的基础工具。SCP 适合少量文件传输，目录同步和大量文件更推荐 rsync。排查 SSH 问题时，不要只看“能不能登录”，要看账号、密钥、配置解析、认证顺序、服务端日志和网络路径。

基础登录命令很简单。指定端口和私钥是最常用的两个参数。

```bash
ssh user@example.com
ssh -p 2222 user@example.com
ssh -i ~/.ssh/id_ed25519 user@example.com
```

连接失败时先加 `-v`，不够再加到 `-vvv`。输出里重点看它尝试了哪些密钥、服务端接受了哪些认证方式、是否卡在 known_hosts、算法协商还是网络连接。

```bash
ssh -vvv -p 2222 user@example.com
```

本地配置可以放进 `~/.ssh/config`。配置写好后，用短名字登录，也能让 scp、rsync、git 复用同一套参数。

```text
Host web-prod
  HostName example.com
  User deploy
  Port 2222
  IdentityFile ~/.ssh/id_ed25519
  ServerAliveInterval 30
```

检查最终配置用 `ssh -G`，它会把匹配后的参数展开。排查多段 Host 规则覆盖时特别有用。

```bash
ssh -G web-prod
```

密钥建议优先用 ed25519。私钥权限太宽时，OpenSSH 会直接拒绝使用它。

```bash
ssh-keygen -t ed25519 -C "mail@example.com"
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 644 ~/.ssh/id_ed25519.pub
```

复制公钥可以用 `ssh-copy-id`。没有这个工具时，手动把公钥追加到远端 `~/.ssh/authorized_keys`，并确认目录和文件权限。

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@example.com
```

端口转发要分清方向。本地转发 `-L` 是“本地监听一个端口，转到远端能访问的地址”。比如远端机器能访问内网 Web，本地通过 8080 访问。

```bash
ssh -L 8080:127.0.0.1:80 user@example.com
```

远程转发 `-R` 是“远端监听一个端口，转回本地能访问的地址”。这常用于临时让远端访问本地开发服务。

```bash
ssh -R 9000:127.0.0.1:3000 user@example.com
```

动态转发 `-D` 会开一个 SOCKS 代理。浏览器或工具要显式配置 SOCKS5，DNS 是否也走代理取决于客户端配置。

```bash
ssh -D 127.0.0.1:1080 user@example.com
```

只建立转发不进 shell，可以用 `-N`；放到后台用 `-f`。生产环境更推荐用 systemd 管理长期隧道，不要靠一个后台 ssh 进程默默跑几个月。

```bash
ssh -N -f -L 8080:127.0.0.1:80 user@example.com
```

SCP 适合传单个文件或小目录。指定端口时注意是大写 `-P`，和 ssh 的小写 `-p` 不一样。

```bash
scp ./file.txt user@example.com:/tmp/file.txt
scp user@example.com:/tmp/file.txt ./file.txt
scp -r ./dist user@example.com:/var/www/dist
scp -P 2222 -i ~/.ssh/id_ed25519 ./file.txt user@example.com:/tmp/file.txt
```

遇到老设备时，可能要临时放开旧算法。这个只能作为兼容手段，记录下来并推动设备升级，不要写进全局配置长期使用。

```bash
ssh -o HostKeyAlgorithms=+ssh-rsa -o PubkeyAcceptedAlgorithms=+ssh-rsa user@example.com
```

我的 SSH 排错顺序是：先确认网络和端口，再看本地 `ssh -G` 配置，然后用 `-vvv` 看认证过程，最后查服务端 `/var/log/auth.log` 或 `journalctl -u ssh`。端口转发不通时，额外确认监听地址、转发方向、防火墙和目标服务是否只绑定在 127.0.0.1。
