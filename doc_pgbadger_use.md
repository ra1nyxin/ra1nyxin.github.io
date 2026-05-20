# pgBadger 使用

pgBadger 用于分析 PostgreSQL 日志，适合慢查询和异常 SQL 复盘。

## 常用命令

```bash
pgbadger postgresql.log
```

```bash
pgbadger postgresql.log -o report.html
```

```bash
pgbadger /var/log/postgresql/*.log -o report.html
```

```bash
pgbadger -j 4 postgresql.log -o report.html
```

```bash
pgbadger --prefix "%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h " postgresql.log
```

小记录：日志格式要和 prefix 匹配，安全分析重点看高频失败登录和异常查询模式。
