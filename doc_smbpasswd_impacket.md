# smbpasswd.py 使用

smbpasswd.py 可通过 SMB/RPC 修改账号密码，适合验证密码策略和权限边界。

## 常用命令

```bash
smbpasswd.py domain.local/user:oldpass@dc01.domain.local -newpass NewPass123!
```

```bash
smbpasswd.py -newhashes LMHASH:NTHASH domain.local/user:oldpass@dc01.domain.local
```

```bash
smbpasswd.py -hashes LMHASH:NTHASH domain.local/user@dc01.domain.local -newpass NewPass123!
```

```bash
smbpasswd.py -dc-ip 192.168.1.10 domain.local/user:oldpass@dc01 -newpass NewPass123!
```

```bash
rpcclient -U "domain/user%pass" dc01.domain.local -c "setuserinfo2 user 23 NewPass123!"
```

小记录：这类动作影响账号状态，测试账号和真实账号要分开处理。
