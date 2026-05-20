# PostgreSQL psql 检查

PostgreSQL 在靶场和企业内网都很常见。检查重点是账号权限、数据库扩展、函数执行能力、敏感表和连接来源限制。

## 连接与基础信息

```bash
psql -h 192.168.1.10 -p 5432 -U postgres
```

```bash
psql postgresql://user:pass@192.168.1.10:5432/appdb -c "select version();"
```

```bash
nmap -sV -p 5432 --script pgsql-brute 192.168.1.10
```

## 数据库和表

```bash
psql postgresql://user:pass@192.168.1.10:5432/postgres -c "\\l"
```

```bash
psql postgresql://user:pass@192.168.1.10:5432/appdb -c "\\dt"
```

```bash
psql postgresql://user:pass@192.168.1.10:5432/appdb -c "select table_schema,table_name,column_name from information_schema.columns where column_name ilike '%pass%';"
```

## 权限和扩展

```bash
psql postgresql://user:pass@192.168.1.10:5432/appdb -c "\\du"
```

```bash
psql postgresql://user:pass@192.168.1.10:5432/appdb -c "select * from pg_available_extensions where installed_version is not null;"
```

PostgreSQL 的 `\du`、扩展列表和函数权限很有价值。看到超级用户或危险扩展时，先确认业务必要性和连接来源。
