# find 和 xargs 常用用法

这篇记录 find、xargs 的常用命令。找文件、按时间筛选、批量处理、清理临时文件时很常用。

## find 基础

按文件名查找。

```bash
find . -name "*.md"
```

忽略大小写。

```bash
find . -iname "*.jpg"
```

只找文件。

```bash
find . -type f -name "*.log"
```

只找目录。

```bash
find . -type d -name "node_modules"
```

## 按大小和时间

查大于 100MB 的文件。

```bash
find . -type f -size +100M
```

查最近 1 天修改的文件。

```bash
find . -type f -mtime -1
```

查 30 天前的日志。

```bash
find . -type f -name "*.log" -mtime +30
```

查空文件。

```bash
find . -type f -empty
```

## 执行命令

打印文件详细信息。

```bash
find . -type f -name "*.log" -exec ls -lh {} \;
```

批量计算 SHA256。

```bash
find . -type f -name "*.tar.gz" -exec sha256sum {} \;
```

配合 xargs 统计行数。

```bash
find . -type f -name "*.md" -print0 | xargs -0 wc -l
```

配合 xargs 搜索。

```bash
find . -type f -name "*.js" -print0 | xargs -0 rg "localStorage"
```

## 清理前预览

先列出要删的文件。

```bash
find . -type f -name "*.tmp" -mtime +7
```

确认后删除。

```bash
find . -type f -name "*.tmp" -mtime +7 -delete
```

删除空目录。

```bash
find . -type d -empty -delete
```

## 小记录

涉及删除时先不加 `-delete`，确认输出范围没问题再执行。文件名可能带空格时，用 `-print0` 和 `xargs -0`，能避免很多奇怪问题。
