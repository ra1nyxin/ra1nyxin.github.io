# JLECmd 使用

JLECmd 用于解析 Windows Jump List，适合用户打开文件和程序活动分析。

## 常用命令

```bash
JLECmd.exe -f C:\Evidence\file.automaticDestinations-ms --csv C:\Output
```

```bash
JLECmd.exe -d C:\Evidence\JumpLists --csv C:\Output
```

```bash
JLECmd.exe -d C:\Evidence\JumpLists --json C:\Output
```

```bash
JLECmd.exe -d C:\Evidence\JumpLists --csv C:\Output --csvf jumplists.csv
```

```bash
TimelineExplorer.exe C:\Output\jumplists.csv
```

小记录：Jump List 对用户交互痕迹很有用，适合和 LNK、ShellBags 一起看。
