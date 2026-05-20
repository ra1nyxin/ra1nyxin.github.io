# LECmd 使用

LECmd 用于解析 Windows LNK 快捷方式文件。

## 常用命令

```bash
LECmd.exe -f C:\Evidence\sample.lnk --csv C:\Output
```

```bash
LECmd.exe -d C:\Evidence\Links --csv C:\Output
```

```bash
LECmd.exe -d C:\Evidence\Links --json C:\Output
```

```bash
LECmd.exe -d C:\Evidence\Links --csv C:\Output --csvf lnk.csv
```

```bash
TimelineExplorer.exe C:\Output\lnk.csv
```

LNK 能暴露目标路径、卷信息、主机名和访问时间，适合追踪外接设备和文件打开行为。
