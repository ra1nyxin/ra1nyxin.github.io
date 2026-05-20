# SSH 算法与配置枚举

SSH 枚举经常用来判断老旧加密算法、弱口令入口和跳板机暴露情况。记录时把端口、banner、认证方式和算法结果放在一起，后续复核会轻松很多。

## 基础连接信息

```bash
ssh -vvv user@192.168.1.10
```

```bash
nc -nv 192.168.1.10 22
```

```bash
nmap -sV -p 22 --script ssh2-enum-algos 192.168.1.10
```

## 算法与认证方式

```bash
nmap -p 22 --script ssh-auth-methods --script-args ssh.user=root 192.168.1.10
```

```bash
nmap -p 22 --script ssh-hostkey --script-args ssh_hostkey=full 192.168.1.10
```

```bash
ssh -o PreferredAuthentications=publickey -o PubkeyAuthentication=no user@192.168.1.10
```

## 老系统兼容测试

```bash
ssh -oKexAlgorithms=+diffie-hellman-group1-sha1 user@192.168.1.10
```

```bash
ssh -oHostKeyAlgorithms=+ssh-rsa -oPubkeyAcceptedAlgorithms=+ssh-rsa user@192.168.1.10
```

看到旧算法先记录影响范围，再确认是否只是兼容性开启。跳板机和管理网里的 SSH 配置，通常比普通业务机更值得优先复核。
