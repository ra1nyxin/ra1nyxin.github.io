# mssqlclient.py 使用

mssqlclient.py 用于连接 MSSQL 并执行查询，适合账号权限和 xp_cmdshell 验证。

## 常用命令

```bash
mssqlclient.py domain.local/user:pass@192.168.1.10
```

```bash
mssqlclient.py user:pass@192.168.1.10 -windows-auth
```

```bash
mssqlclient.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
mssqlclient.py -k -no-pass domain.local/user@sql01.domain.local
```

```bash
mssqlclient.py user:pass@192.168.1.10 -db master
```

小记录：MSSQL 风险要看登录权限、数据库角色、链接服务器和 xp_cmdshell 状态。
