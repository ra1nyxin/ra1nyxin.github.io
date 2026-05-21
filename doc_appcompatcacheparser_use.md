# AppCompatCacheParser 使用

AppCompatCacheParser 主要是读 ShimCache/AppCompatCache。它适合拿来做执行线索复核，尤其在你想知道某个程序有没有在这台机器上出现过的时候。

## 导出

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

CSV 用起来最顺，尤其是后面要丢进时间线或者和别的执行工件对比的时候。

## 对照

```bash
TimelineExplorer.exe C:\Output\shimcache.csv
```

ShimCache 更像一个痕迹集合，不是精确执行时间表。它能告诉你这东西大概率在这里出现过，但时间点通常要和 Prefetch、Amcache 和日志一起拼。

## 复核

如果同一台机器有多个镜像来源，最好把 SYSTEM Hive 和采集时间记清楚。AppCompatCache 很容易和别的执行线索混读，分不清来源就很难对上场景。

## 习惯

同一套证据最好统一命名，避免后面和别的镜像混在一起。这个工件看着简单，真正麻烦的是来源一乱就很难收口。
