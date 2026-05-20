# SQLECmd 使用

SQLECmd 用于解析 SQLite 数据库，适合浏览器、聊天工具和应用数据分析。

## 常用命令

```bash
SQLECmd.exe -f C:\Evidence\History --csv C:\Output
```

```bash
SQLECmd.exe -d C:\Evidence\SQLite --csv C:\Output
```

```bash
SQLECmd.exe -f C:\Evidence\Cookies --json C:\Output
```

```bash
SQLECmd.exe -f C:\Evidence\History --hunt C:\Rules\SQLiteHunt
```

```bash
SQLECmd.exe -d C:\Evidence --csv C:\Output --dedupe
```

SQLite 证据要先复制副本再分析，避免锁文件或运行中数据库影响结果。
