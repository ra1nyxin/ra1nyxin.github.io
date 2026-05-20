# ADFind 常用用法

这篇记录 ADFind 的常用命令。它适合在 Windows 或 AD 环境里做 LDAP 快速枚举，输出简洁，命令也短。

## 基础查询

查所有用户。

```bash
adfind -b dc=example,dc=local -f "(objectcategory=person)" -csv
```

查所有计算机。

```bash
adfind -b dc=example,dc=local -f "(objectcategory=computer)" -csv
```

查所有组。

```bash
adfind -b dc=example,dc=local -f "(objectcategory=group)" -csv
```

## 常见过滤

查 SPN。

```bash
adfind -b dc=example,dc=local -f "(servicePrincipalName=*)" -csv
```

查受保护账户。

```bash
adfind -b dc=example,dc=local -f "(adminCount=1)" -csv
```

查委派标记。

```bash
adfind -b dc=example,dc=local -f "(userAccountControl:1.2.840.113556.1.4.803:=524288)" -csv
```

## 输出整理

输出到文件。

```bash
adfind -b dc=example,dc=local -f "(objectcategory=person)" -csv > users.csv
```

查看帮助。

```bash
adfind -h
```

## 备注

ADFind 比较适合快速验证某个 LDAP 过滤器。查到结果后再用 PowerView、ldapdomaindump 或 BloodHound 补关系，会更容易整理。
