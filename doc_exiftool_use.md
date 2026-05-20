# ExifTool 常用用法

这篇记录 ExifTool 的常用命令。它适合查看图片、PDF、Office 文件和各种附件的元数据。

## 基础查看

查看元数据。

```bash
exiftool file.jpg
```

查看所有字段。

```bash
exiftool -a -u -g1 file.jpg
```

查看 GPS。

```bash
exiftool -gps:all file.jpg
```

查看 PDF 元数据。

```bash
exiftool document.pdf
```

## 批量处理

递归查看目录。

```bash
exiftool -r evidence/
```

导出 CSV。

```bash
exiftool -csv -r evidence/ > metadata.csv
```

删除元数据副本。

```bash
exiftool -all= file.jpg
```

## 备注

ExifTool 适合做附件初筛。比赛里图片和文档经常藏时间、软件、路径、用户名或 GPS，先看元数据不会浪费太多时间。
