# AmcacheParser 使用

AmcacheParser 用来读 Amcache.hve。它最实用的地方，是把程序路径、哈希、执行痕迹和安装相关信息从注册表里拆出来，省得人工翻一堆二进制 Hive。

## 导出

```bash
AmcacheParser.exe -f C:\Evidence\Amcache.hve --csv C:\Output
```

```bash
AmcacheParser.exe -f C:\Evidence\Amcache.hve --json C:\Output
```

```bash
AmcacheParser.exe -f C:\Evidence\Amcache.hve --csv C:\Output --csvf amcache.csv
```

如果要批量进时间线，CSV 一般比 JSON 更顺手。字段不花哨，但和其他工件对比更方便。

## 证据

```bash
AmcacheParser.exe -d C:\Evidence --csv C:\Output
```

```bash
TimelineExplorer.exe C:\Output\amcache.csv
```

Amcache 最适合确认程序有没有跑过、路径有没有被移动过、哈希还能不能对上。时间点和首次执行线索要和 Prefetch、ShimCache、事件日志一起看。

## 对照

同一台机器上如果有多个采集批次，最好先按机器名和采集时间分开。Amcache 很容易和别的工件串起来，混在一起后回看会比较费劲。

## 习惯

做时间线时，先保留原始导出，再出整理版。这样后面发现字段映射有问题，还能回头重跑，不用从头再找 Hive。
