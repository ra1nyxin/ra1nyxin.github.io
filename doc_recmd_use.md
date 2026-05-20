# RECmd 使用

RECmd 用于解析 Windows Registry hive 和批量运行 registry batch。

## 常用命令

```bash
RECmd.exe -f C:\Evidence\SOFTWARE --csv C:\Output
```

```bash
RECmd.exe -f C:\Evidence\NTUSER.DAT --bn RECmd_Batch_MC.reb --csv C:\Output
```

```bash
RECmd.exe -d C:\Evidence\Registry --csv C:\Output
```

```bash
RECmd.exe --sync
```

```bash
RECmd.exe -f C:\Evidence\SYSTEM --json C:\Output
```

小记录：注册表分析要按 hive 和用户分开，批处理结果适合快速初筛。
