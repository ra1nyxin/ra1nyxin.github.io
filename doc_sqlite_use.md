# SQLite 常用用法

这篇记录 sqlite3 命令行的常用方式。临时查数据库、导出数据、看表结构、排查小型应用状态时很方便。

## 打开数据库

打开数据库文件。

```bash
sqlite3 app.db
```

直接执行 SQL。

```bash
sqlite3 app.db "select name from sqlite_master where type='table';"
```

查看版本。

```bash
sqlite3 --version
```

## 查看结构

列出表。

```bash
sqlite3 app.db ".tables"
```

查看建表语句。

```bash
sqlite3 app.db ".schema users"
```

查看数据库信息。

```bash
sqlite3 app.db ".dbinfo"
```

## 查询数据

查询前 10 行。

```bash
sqlite3 app.db "select * from users limit 10;"
```

设置表格输出。

```bash
sqlite3 app.db -cmd ".mode table" "select id,name from users limit 10;"
```

设置 CSV 输出。

```bash
sqlite3 app.db -cmd ".mode csv" "select id,name from users limit 10;"
```

## 导入导出

导出 SQL。

```bash
sqlite3 app.db ".dump" > backup.sql
```

从 SQL 恢复。

```bash
sqlite3 restored.db < backup.sql
```

导出 CSV。

```bash
sqlite3 app.db -header -csv "select * from users;" > users.csv
```

导入 CSV。

```bash
sqlite3 app.db ".import --csv users.csv users"
```

## 维护

检查数据库。

```bash
sqlite3 app.db "pragma integrity_check;"
```

压缩数据库。

```bash
sqlite3 app.db "vacuum;"
```

查看页面统计。

```bash
sqlite3 app.db "pragma page_count; pragma page_size;"
```

## 小记录

SQLite 文件很好复制，但复制前要确认应用是否还在写入。重要数据先做一份备份，再执行导入、删除、vacuum 这类操作。
