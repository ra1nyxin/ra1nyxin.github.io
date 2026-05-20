# AppCompatCacheParser 使用

AppCompatCacheParser 用于解析 ShimCache/AppCompatCache，适合程序执行线索复核。

## 常用命令

```bash
AppCompatCacheParser.exe -f C:\Evidence\SYSTEM --csv C:\Output
```

```bash
AppCompatCacheParser.exe -f C:\Evidence\SYSTEM --json C:\Output
```

```bash
AppCompatCacheParser.exe -f C:\Evidence\SYSTEM --csv C:\Output --csvf shimcache.csv
```

```bash
AppCompatCacheParser.exe -d C:\Evidence --csv C:\Output
```

```bash
TimelineExplorer.exe C:\Output\shimcache.csv
```

小记录：ShimCache 更适合作为执行线索，具体执行时间要结合 Prefetch、Amcache 和日志。
