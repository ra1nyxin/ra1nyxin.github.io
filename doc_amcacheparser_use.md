# AmcacheParser 使用

AmcacheParser 用于解析 Amcache.hve，适合程序执行痕迹分析。

## 常用命令

```bash
AmcacheParser.exe -f C:\Evidence\Amcache.hve --csv C:\Output
```

```bash
AmcacheParser.exe -f C:\Evidence\Amcache.hve --json C:\Output
```

```bash
AmcacheParser.exe -f C:\Evidence\Amcache.hve --csv C:\Output --csvf amcache.csv
```

```bash
AmcacheParser.exe -d C:\Evidence --csv C:\Output
```

```bash
TimelineExplorer.exe C:\Output\amcache.csv
```

Amcache 适合确认程序路径、哈希和首次执行线索，时间语义要和其他证据对照。
