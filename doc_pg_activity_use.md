# pg_activity 使用

pg_activity 用于查看 PostgreSQL 实时活动，适合性能排查和异常连接观察。

## 常用命令

```bash
pg_activity -h 192.168.1.10 -U postgres
```

```bash
pg_activity -h 192.168.1.10 -p 5432 -U app
```

```bash
pg_activity --rds -h db.example.com -U app
```

```bash
pg_activity --blocksize 8192 -h 192.168.1.10 -U postgres
```

```bash
PGPASSWORD=pass pg_activity -h 192.168.1.10 -U app
```

安全排查时重点看异常来源、长事务、锁等待和可疑查询。
