# changepasswd.py 使用

changepasswd.py 可用于授权场景下修改或验证 Windows 账号密码变更能力。

## 常用命令

```bash
changepasswd.py domain.local/user:oldpass@dc01.domain.local -newpass NewPass123!
```

```bash
changepasswd.py -protocol smb domain.local/user:oldpass@dc01.domain.local -newpass NewPass123!
```

```bash
changepasswd.py -protocol rpc-samr domain.local/user:oldpass@dc01.domain.local -newpass NewPass123!
```

```bash
changepasswd.py -hashes LMHASH:NTHASH domain.local/user@dc01.domain.local -newpass NewPass123!
```

```bash
net user user NewPass123! /domain
```

小记录：密码变更测试要提前确认授权，避免影响真实账号登录和服务运行。
