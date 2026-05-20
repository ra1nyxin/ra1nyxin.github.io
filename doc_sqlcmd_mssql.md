# sqlcmd 常用用法

这篇记录 sqlcmd 的常用命令。它适合在授权 SQL Server 环境里做版本确认、数据库查看和简单查询。

## 基础连接

连接并执行查询。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -Q "select @@version"
```

查看数据库列表。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -Q "select name from sys.databases"
```

查看当前用户。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -Q "select system_user"
```

## 脚本和输出

执行本地脚本。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -i script.sql
```

保存输出。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -Q "select name from sys.databases" -o mssql.txt
```

指定分隔符。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -Q "select name from sys.databases" -s ","
```

## 常见排查

列服务器属性。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -Q "select @@servername, @@version"
```

查看权限。

```bash
sqlcmd -S 192.168.1.10 -U USER -P 'PASSWORD' -Q "select is_srvrolemember('sysadmin')"
```

## 备注

sqlcmd 适合先确认登录态、数据库版本和当前权限，再决定是否继续查表、查链接服务器或导数据。命令稳定，适合写进脚本和文档。
