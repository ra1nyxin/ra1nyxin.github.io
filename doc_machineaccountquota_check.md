# MachineAccountQuota 检查

MachineAccountQuota 决定普通域用户可创建多少机器账号，常影响 AD 攻击路径。

## 常用命令

```bash
Get-ADDomain | Select-Object MachineAccountQuota
```

```bash
crackmapexec ldap dc01.domain.local -u user -p pass -M maq
```

```bash
bloodyAD --host dc01.domain.local -d domain.local -u user -p pass get object "DC=domain,DC=local" --attr ms-DS-MachineAccountQuota
```

```bash
ldapsearch -x -H ldap://dc01.domain.local -D "user@domain.local" -w pass -b "DC=domain,DC=local" ms-DS-MachineAccountQuota
```

```bash
netexec ldap dc01.domain.local -u user -p pass -M maq
```

小记录：MAQ 大于 0 时要结合委派、AD CS 和资源基约束委派一起评估。
