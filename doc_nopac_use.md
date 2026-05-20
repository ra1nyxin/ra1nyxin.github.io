# noPac 使用

noPac 用于验证特定 AD 漏洞链条件，适合补丁和配置复核。

## 常用命令

```bash
python3 noPac.py domain.local/user:pass -dc-ip 192.168.1.10
```

```bash
python3 noPac.py domain.local/user:pass -dc-ip 192.168.1.10 -shell
```

```bash
python3 noPac.py domain.local/user:pass -dc-ip 192.168.1.10 --impersonate administrator
```

```bash
python3 noPac.py -use-ldap domain.local/user:pass -dc-ip 192.168.1.10
```

```bash
python3 scanner.py domain.local/user:pass -dc-ip 192.168.1.10
```

小记录：先做扫描和补丁确认，实际利用动作只放在授权实验或明确范围内。
