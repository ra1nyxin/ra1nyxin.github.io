# ldapdomaindump 常用用法

这篇记录 ldapdomaindump 的常用命令。它适合把 LDAP 信息导成 HTML、JSON 和文本，方便后面整理用户、组、计算机和关系。

## 基础导出

使用 LDAP 连接导出。

```bash
ldapdomaindump -u 'DOMAIN\USER' -p 'PASSWORD' ldap://dc01.example.local
```

指定输出目录。

```bash
ldapdomaindump -u 'DOMAIN\USER' -p 'PASSWORD' -o dump ldap://dc01.example.local
```

使用 LDAPS。

```bash
ldapdomaindump -u 'DOMAIN\USER' -p 'PASSWORD' ldaps://dc01.example.local
```

## 常见输出

生成 HTML 报告后，目录里会有多个页面。

```bash
ls dump
```

查看用户列表。

```bash
cat dump/domain_users.json
```

查看组列表。

```bash
cat dump/domain_groups.json
```

## 过滤和整理

提取用户名。

```bash
jq -r '.[].attributes.sAMAccountName[0]' dump/domain_users.json
```

提取计算机名。

```bash
jq -r '.[].attributes.dNSHostName[0]' dump/domain_computers.json
```

## 小记录

ldapdomaindump 适合把 LDAP 结果一次性铺开，后面找 SPN、组成员、计算机和 OU 会方便很多。导出后最好和 BloodHound 数据一起看，关系会更完整。
