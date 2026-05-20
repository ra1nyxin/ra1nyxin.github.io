# adidnsdump 常用用法

这篇记录 adidnsdump 的常用命令。它适合在授权 Active Directory 环境里导出 DNS 区域记录，查名字、记录和一些隐藏主机信息。

## 基础导出

指定域和账号导出。

```bash
adidnsdump -u 'DOMAIN\USER' -p 'PASSWORD' example.local
```

指定 DNS 服务器。

```bash
adidnsdump -u 'DOMAIN\USER' -p 'PASSWORD' -d example.local -s 192.168.1.10
```

输出到目录。

```bash
adidnsdump -u 'DOMAIN\USER' -p 'PASSWORD' -o dnsdump example.local
```

## 结果整理

查看导出的文件。

```bash
ls dnsdump
```

提取主机记录。

```bash
cat dnsdump/dns_records.csv
```

提取可解析名字。

```bash
cut -d, -f1 dnsdump/dns_records.csv
```

## 备注

AD DNS 里的记录经常能补齐机器名和子域名，和 LDAP、BloodHound 的数据一起看会更完整。导出后先看 A、CNAME 和 SRV 记录，再决定要不要继续深挖。
