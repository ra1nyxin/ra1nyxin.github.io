# samrdump.py 使用

samrdump.py 用于通过 SAMR 枚举 Windows 本地或域用户信息。

## 常用命令

```bash
samrdump.py 192.168.1.10
```

```bash
samrdump.py domain.local/user:pass@192.168.1.10
```

```bash
samrdump.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
samrdump.py -dc-ip 192.168.1.10 domain.local/user:pass@dc01
```

```bash
samrdump.py -csv domain.local/user:pass@192.168.1.10
```

小记录：它适合补充 SMB 和 LDAP 枚举，输出里 RID、组和描述字段很有价值。
