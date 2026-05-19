# osquery 常用用法

这篇记录 osquery 的常用命令。它把系统状态抽象成 SQL 表，适合蓝队比赛里的主机排查和资产状态查询。

## 交互模式

进入 osqueryi。

```bash
osqueryi
```

查看表。

```sql
.tables
```

查看表结构。

```sql
.schema processes
```

## 常见查询

查看进程。

```sql
select pid,name,path from processes limit 20;
```

查看监听端口。

```sql
select pid,port,protocol,address from listening_ports;
```

查看用户。

```sql
select username,uid,directory from users;
```

查看启动项。

```sql
select name,path,args from startup_items;
```

## 命令行查询

单次查询进程。

```bash
osqueryi "select pid,name,path from processes limit 20;"
```

输出 JSON。

```bash
osqueryi --json "select pid,name,path from processes limit 20;"
```

## 小记录

osquery 适合把主机状态变成可查询数据。比赛里常查进程、网络、用户、启动项、计划任务和浏览器扩展。
