# awk 和 sed 常用用法

这篇记录 awk、sed 的常用命令。它们适合处理文本、日志、CSV、命令输出和一些小规模批量替换。

## awk 基础

打印第一列。

```bash
awk '{print $1}' access.log
```

打印第一列和第三列。

```bash
awk '{print $1, $3}' access.log
```

指定分隔符。

```bash
awk -F, '{print $1,$3}' data.csv
```

跳过表头。

```bash
awk 'NR>1 {print $1}' data.txt
```

## awk 筛选和统计

筛选状态码 500。

```bash
awk '$9 == 500 {print $0}' access.log
```

按第一列计数。

```bash
awk '{count[$1]++} END {for (k in count) print k, count[k]}' access.log
```

求第三列总和。

```bash
awk '{sum += $3} END {print sum}' data.txt
```

输出带行号。

```bash
awk '{print NR, $0}' file.txt
```

## sed 基础

替换每行第一个匹配。

```bash
sed 's/foo/bar/' file.txt
```

替换每行所有匹配。

```bash
sed 's/foo/bar/g' file.txt
```

原地替换。

```bash
sed -i 's/foo/bar/g' file.txt
```

打印指定行。

```bash
sed -n '10,20p' file.txt
```

## sed 删除和插入

删除空行。

```bash
sed '/^$/d' file.txt
```

删除注释行。

```bash
sed '/^#/d' config.conf
```

在匹配行后追加内容。

```bash
sed '/server_name/a return 301 https://example.com$request_uri;' nginx.conf
```

## 小记录

awk 更适合按列处理，sed 更适合按行替换。命令会改文件时先去掉 `-i` 预览输出，确认没问题再原地替换。
