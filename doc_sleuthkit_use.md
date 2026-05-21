# Sleuth Kit 常用用法

Sleuth Kit 适合做磁盘镜像离线分析。常用思路是先看分区，再列目录和 inode，最后导出关键文件或恢复目录。

## 分区和目录

```bash
mmls disk.img
```

```bash
fsstat -o 2048 disk.img
```

```bash
fls -o 2048 disk.img
```

`mmls` 先找分区起始偏移，后面的 `-o` 要填对。偏移错了，目录看起来会像坏镜像。

## 递归和导出

```bash
fls -r -m / -o 2048 disk.img > bodyfile.txt
```

```bash
icat -o 2048 disk.img 1234 > file.bin
```

```bash
tsk_recover -o 2048 disk.img out/
```

`fls` 适合生成时间线输入，`icat` 用 inode 导出单个文件，`tsk_recover` 适合批量恢复。导出的文件要计算哈希并记录来源 inode。

## 记录重点

证据分析里要写清镜像哈希、分区偏移、文件系统、导出路径和命令。后面复核时，这些比单独的截图更可靠。
