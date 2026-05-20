# getTGT.py 与 getST.py

getTGT.py 和 getST.py 用于获取 Kerberos TGT/ST，适合 Kerberos 路径验证。

## 常用命令

```bash
getTGT.py domain.local/user:pass
```

```bash
getTGT.py -hashes LMHASH:NTHASH domain.local/user
```

```bash
getST.py -spn cifs/server.domain.local domain.local/user:pass
```

```bash
getST.py -impersonate administrator -spn cifs/server.domain.local domain.local/user:pass
```

```bash
export KRB5CCNAME=user.ccache
```

小记录：Kerberos 问题先看时间同步、SPN、DNS 和 KRB5CCNAME，很多失败都在这些基础项。
