# Sleuth Kit 常用用法

Sleuth Kit 适合磁盘镜像分析。常用工具：`mmls` 看分区，`fls` 看目录，`icat` 导出文件。

```bash
mmls disk.img
```

```bash
fls -r -m / disk.img
```

```bash
icat disk.img 1234 > file.bin
```

```bash
tsk_recover disk.img out/
```

小记录：Sleuth Kit 适合离线证据分析。先看分区和文件系统，再找关键文件和时间线。
