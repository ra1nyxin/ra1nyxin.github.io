# bloodyAD 常用用法

bloodyAD 适合 AD 对象查询和权限操作验证。常用参数：`-d` 域，`-u` 用户，`-p` 密码，`--host` 域控。

```bash
bloodyAD -d example.local -u USER -p 'PASSWORD' --host 192.168.1.10 get object USER
```

```bash
bloodyAD -d example.local -u USER -p 'PASSWORD' --host 192.168.1.10 get children "DC=example,DC=local"
```

```bash
bloodyAD -d example.local -u USER -p 'PASSWORD' --host 192.168.1.10 get membership USER
```

```bash
bloodyAD -d example.local -u USER -p 'PASSWORD' --host 192.168.1.10 get writable
```

小记录：bloodyAD 适合细查对象和 ACL。任何修改类操作都要先记录目标 DN、原始权限和预期结果。
