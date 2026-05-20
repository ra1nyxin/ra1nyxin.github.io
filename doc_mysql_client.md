# MySQL 客户端检查

MySQL 检查常用于确认弱口令、越权账号、文件读写能力和业务库敏感字段。先做只读枚举，确认权限边界后再进行更深入验证。

## 连接与版本

```bash
mysql -h 192.168.1.10 -P 3306 -u root -p
```

```bash
mysql -h 192.168.1.10 -u app -p -e "select version(), user(), current_user();"
```

```bash
nmap -sV -p 3306 --script mysql-info 192.168.1.10
```

## 库表枚举

```bash
mysql -h 192.168.1.10 -u app -p -e "show databases;"
```

```bash
mysql -h 192.168.1.10 -u app -p appdb -e "show tables;"
```

```bash
mysql -h 192.168.1.10 -u app -p appdb -e "select table_name,column_name from information_schema.columns where column_name like '%pass%';"
```

## 权限和文件能力

```bash
mysql -h 192.168.1.10 -u app -p -e "show grants;"
```

```bash
mysql -h 192.168.1.10 -u app -p -e "show variables like 'secure_file_priv';"
```

MySQL 文档里建议把账号、来源 IP、授权语句和敏感库表一起写。很多风险来自过宽授权，例如业务账号带了 `FILE`、`SUPER` 或全库写权限。
