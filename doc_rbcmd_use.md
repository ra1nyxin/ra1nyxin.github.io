# RBCmd 使用

RBCmd 用于解析 Windows 回收站元数据，适合删除文件调查。

## 常用命令

```bash
RBCmd.exe -f C:\Evidence\$I123456 --csv C:\Output
```

```bash
RBCmd.exe -d C:\Evidence\RecycleBin --csv C:\Output
```

```bash
RBCmd.exe -d C:\Evidence\RecycleBin --json C:\Output
```

```bash
RBCmd.exe -d C:\Evidence\RecycleBin --csv C:\Output --csvf recycle.csv
```

```bash
TimelineExplorer.exe C:\Output\recycle.csv
```

小记录：回收站记录能补充删除时间、原始路径和文件大小，适合和 MFT 对照。
