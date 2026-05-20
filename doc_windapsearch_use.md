# windapsearch 常用用法

windapsearch 适合 AD LDAP 快速枚举。常用参数：`-d` 域，`-u` 用户，`-p` 密码，`--dc-ip` 域控。

```bash
windapsearch -d example.local --dc-ip 192.168.1.10 -u USER -p 'PASSWORD' --users
```

```bash
windapsearch -d example.local --dc-ip 192.168.1.10 -u USER -p 'PASSWORD' --groups
```

```bash
windapsearch -d example.local --dc-ip 192.168.1.10 -u USER -p 'PASSWORD' --computers
```

```bash
windapsearch -d example.local --dc-ip 192.168.1.10 -u USER -p 'PASSWORD' --da
```

windapsearch 输出很适合快速拿用户、组、计算机和域管信息。后面可以接 BloodHound 做关系分析。
