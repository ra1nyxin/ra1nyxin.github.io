# Oracle sqlplus 检查

Oracle 在老业务系统里很常见，枚举时需要留意 SID、服务名、默认账号、DBA 角色和目录对象。命令记录要写清连接串，后续复测会省很多时间。

## 服务发现

```bash
nmap -sV -p 1521 --script oracle-sid-brute 192.168.1.10
```

```bash
nmap -p 1521 --script oracle-tns-version 192.168.1.10
```

```bash
tnsping 192.168.1.10:1521/ORCL
```

## 登录与基础信息

```bash
sqlplus user/password@192.168.1.10:1521/ORCL
```

```bash
sqlplus -L user/password@//192.168.1.10:1521/ORCL
```

```bash
sqlplus user/password@192.168.1.10:1521/ORCL -S <<< "select banner from v\\$version;"
```

## 权限检查

```bash
sqlplus user/password@192.168.1.10:1521/ORCL -S <<< "select * from session_roles;"
```

```bash
sqlplus user/password@192.168.1.10:1521/ORCL -S <<< "select username,account_status from dba_users;"
```

Oracle 结果要区分 SID 和 service name。默认账号锁定状态、DBA 角色、目录对象和外部过程配置都值得单独记录。
