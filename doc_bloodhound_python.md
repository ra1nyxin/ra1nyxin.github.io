# bloodhound-python 常用用法

这篇记录 bloodhound-python 的常用命令。它适合在授权 AD 环境里采集 BloodHound 需要的数据，用来分析用户、组、会话、ACL 和路径关系。

## 基础采集

使用密码采集。

```bash
bloodhound-python -d example.local -u USER -p 'PASSWORD' -ns 192.168.1.10 -c All
```

指定域控。

```bash
bloodhound-python -d example.local -u USER -p 'PASSWORD' -dc dc01.example.local -ns 192.168.1.10 -c All
```

只采集默认集合。

```bash
bloodhound-python -d example.local -u USER -p 'PASSWORD' -ns 192.168.1.10 -c Default
```

只采集会话。

```bash
bloodhound-python -d example.local -u USER -p 'PASSWORD' -ns 192.168.1.10 -c Session
```

## Kerberos 和 Hash

使用 Kerberos。

```bash
bloodhound-python -d example.local -u USER -k -ns 192.168.1.10 -c All
```

使用 hash。

```bash
bloodhound-python -d example.local -u USER --hashes :NTLM_HASH -ns 192.168.1.10 -c All
```

## 输出和调试

指定输出目录。

```bash
bloodhound-python -d example.local -u USER -p 'PASSWORD' -ns 192.168.1.10 -c All --zip -op bh
```

开启 debug。

```bash
bloodhound-python -d example.local -u USER -p 'PASSWORD' -ns 192.168.1.10 -c All --debug
```

指定 DNS TCP。

```bash
bloodhound-python -d example.local -u USER -p 'PASSWORD' -ns 192.168.1.10 -c All --dns-tcp
```

## 备注

BloodHound 数据采集依赖 DNS、LDAP、SMB 和域控可达性。采集失败时先确认域名解析和时间同步，再看账号权限和目标端口。
