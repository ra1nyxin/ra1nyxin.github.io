# ldapsearch 使用笔记

`ldapsearch` 是排查 LDAP 和 Active Directory 目录信息时很实用的命令行工具。它的难点不在命令本身，而在 base DN、绑定身份、过滤器、属性选择和分页。先从 RootDSE 拿目录根，再逐步缩小查询，比一开始就写复杂过滤器稳定得多。

第一步通常是匿名或简单绑定查询 RootDSE。它会告诉你 naming context、功能级别和服务支持能力。

```bash
ldapsearch -x -H ldap://192.168.1.10 -s base namingContexts
ldapsearch -x -H ldap://192.168.1.10 -s base defaultNamingContext
```

拿到 base DN 后，再查目录根。AD 里常见 base DN 类似 `DC=example,DC=local`。

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "DC=example,DC=local" dn
```

带凭据查询时，绑定账号格式可以用 UPN，也可以用 DN。UPN 更短，脚本里更好读。

```bash
ldapsearch -x -H ldap://192.168.1.10 \
  -D "alice@example.local" -w 'PASSWORD' \
  -b "DC=example,DC=local" "(objectClass=user)" cn sAMAccountName
```

不想把密码写进 shell 历史，可以用 `-W` 交互输入，或者在受控脚本里从文件/环境变量读取。长期自动化最好用最小权限账号。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "alice@example.local" -W -b "DC=example,DC=local" "(objectClass=group)" cn
```

过滤器要写得具体。AD 用户对象常用 `objectCategory=person` 加 `objectClass=user`，比单独 `objectClass=user` 噪声少一些。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "alice@example.local" -W \
  -b "DC=example,DC=local" \
  "(&(objectCategory=person)(objectClass=user))" cn sAMAccountName memberOf
```

按用户名查对象：

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "alice@example.local" -W \
  -b "DC=example,DC=local" \
  "(sAMAccountName=target)" cn distinguishedName memberOf lastLogonTimestamp
```

查组成员时，`member` 只给直接成员。嵌套组要么递归处理结果，要么使用 AD 的 matching rule OID。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "alice@example.local" -W \
  -b "CN=Domain Admins,CN=Users,DC=example,DC=local" \
  "(objectClass=group)" member
```

递归查某用户是否属于某组可以用 `1.2.840.113556.1.4.1941`。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "alice@example.local" -W \
  -b "DC=example,DC=local" \
  "(memberOf:1.2.840.113556.1.4.1941:=CN=Domain Admins,CN=Users,DC=example,DC=local)" \
  cn sAMAccountName
```

查 SPN 适合梳理服务账号和 Kerberos 相关配置。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "alice@example.local" -W \
  -b "DC=example,DC=local" \
  "(servicePrincipalName=*)" sAMAccountName servicePrincipalName
```

密码策略字段通常在 domainDNS 对象上。AD 的时间字段很多是负数 100ns interval，直接看原值不直观，需要换算。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "alice@example.local" -W \
  -b "DC=example,DC=local" \
  "(objectClass=domainDNS)" maxPwdAge minPwdLength lockoutThreshold lockoutDuration
```

大目录要开分页，否则服务端可能只返回一部分。

```bash
ldapsearch -x -E pr=1000/noprompt -H ldap://192.168.1.10 \
  -D "alice@example.local" -W \
  -b "DC=example,DC=local" "(objectClass=user)" cn sAMAccountName
```

输出里如果出现 base64 编码字段，ldapsearch 会用双冒号显示。后续处理时要注意解码，不要把编码后的字符串当原值。

排错顺序很简单：先 RootDSE，确认 base DN；再确认绑定账号格式；然后把过滤器缩到最小；最后加属性列表和分页。LDAP 查询失败时，错误多半出在 DN 写错、账号格式不对、LDAPS/签名要求、分页限制或过滤器括号。
