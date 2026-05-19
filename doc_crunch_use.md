# Crunch 常用用法

这篇记录 Crunch 的常用命令。它适合按规则生成小范围候选词表，范围太大时文件会迅速膨胀。

## 基础生成

生成 4 到 6 位小写字母。

```bash
crunch 4 6 abcdefghijklmnopqrstuvwxyz -o words.txt
```

生成固定长度数字。

```bash
crunch 6 6 0123456789 -o nums.txt
```

生成指定模式。

```bash
crunch 8 8 -t pass%%%% -o words.txt
```

生成带符号集合。

```bash
crunch 8 8 abc123!@# -o words.txt
```

## 控制输出

查看数量和大小估算。

```bash
crunch 8 8 0123456789
```

压缩输出。

```bash
crunch 6 6 0123456789 -o START -z gzip
```

分块输出。

```bash
crunch 8 8 abcdefghijklmnopqrstuvwxyz -b 50mb -o START
```

## 小记录

Crunch 适合生成很明确的模式，比如编号、年份、固定前缀。生成前先估算大小，不然词表很容易比预期大很多。
