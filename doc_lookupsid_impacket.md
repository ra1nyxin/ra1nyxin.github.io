# lookupsid.py 使用

lookupsid.py 用于通过 SID/RID 枚举 Windows 用户和组。

## 常用命令

```bash
lookupsid.py domain.local/user:pass@192.168.1.10
```

```bash
lookupsid.py anonymous@192.168.1.10
```

```bash
lookupsid.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
lookupsid.py -maxRid 4000 domain.local/user:pass@192.168.1.10
```

```bash
lookupsid.py -dc-ip 192.168.1.10 domain.local/user:pass@dc01
```

匿名或低权限能枚举用户时，要记录空会话和 RID 范围。
