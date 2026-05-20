# ldapsearch 常用用法

这篇记录 ldapsearch 的常用命令。它适合在授权 AD 或 LDAP 环境里查询目录信息、用户、组、SPN 和基础域结构。

## 匿名查询

查询 RootDSE。

```bash
ldapsearch -x -H ldap://192.168.1.10 -s base namingcontexts
```

查询默认命名上下文。

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "DC=example,DC=local"
```

只显示 DN。

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "DC=example,DC=local" dn
```

## 带凭据查询

使用域用户绑定。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "USER@example.local" -w 'PASSWORD' -b "DC=example,DC=local"
```

查询用户对象。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "USER@example.local" -w 'PASSWORD' -b "DC=example,DC=local" "(objectClass=user)"
```

查询组对象。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "USER@example.local" -w 'PASSWORD' -b "DC=example,DC=local" "(objectClass=group)"
```

## 常见 AD 查询

查询 sAMAccountName。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "USER@example.local" -w 'PASSWORD' -b "DC=example,DC=local" "(sAMAccountName=target)" cn memberOf
```

查询 SPN。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "USER@example.local" -w 'PASSWORD' -b "DC=example,DC=local" "(servicePrincipalName=*)" servicePrincipalName
```

查询域管理员组成员。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "USER@example.local" -w 'PASSWORD' -b "CN=Domain Admins,CN=Users,DC=example,DC=local" member
```

查询密码策略相关字段。

```bash
ldapsearch -x -H ldap://192.168.1.10 -D "USER@example.local" -w 'PASSWORD' -b "DC=example,DC=local" "(objectClass=domainDNS)" maxPwdAge minPwdLength lockoutThreshold
```

## 输出控制

关闭分页限制。

```bash
ldapsearch -x -E pr=1000/noprompt -H ldap://192.168.1.10 -b "DC=example,DC=local"
```

输出到文件。

```bash
ldapsearch -x -H ldap://192.168.1.10 -b "DC=example,DC=local" > ldap.txt
```

## 备注

ldapsearch 的难点通常在 base DN、绑定账号格式和过滤器。先查 RootDSE 拿 namingContexts，再逐步缩小过滤条件，会比直接写复杂查询稳定。
