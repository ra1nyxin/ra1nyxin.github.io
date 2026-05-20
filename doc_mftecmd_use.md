# MFTECmd 使用

MFTECmd 用于解析 NTFS MFT，适合文件活动时间线分析。

## 常用命令

```bash
MFTECmd.exe -f C:\Evidence\$MFT --csv C:\Output
```

```bash
MFTECmd.exe -f C:\Evidence\$MFT --json C:\Output
```

```bash
MFTECmd.exe -f C:\Evidence\$MFT --body C:\Output\mft.body
```

```bash
MFTECmd.exe -d C:\Evidence --csv C:\Output
```

```bash
MFTECmd.exe -f C:\Evidence\$MFT --csv C:\Output --csvf mft.csv
```

MFT 能看到文件创建、修改和删除痕迹，适合和 USN Journal、Prefetch 交叉分析。
