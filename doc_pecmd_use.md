# PECmd 使用

PECmd 用于解析 Windows Prefetch，适合程序执行时间线分析。

## 常用命令

```bash
PECmd.exe -f C:\Windows\Prefetch\APP.EXE-12345678.pf --csv C:\Output
```

```bash
PECmd.exe -d C:\Windows\Prefetch --csv C:\Output
```

```bash
PECmd.exe -d C:\Evidence\Prefetch --json C:\Output
```

```bash
PECmd.exe -d C:\Evidence\Prefetch --csv C:\Output --csvf prefetch.csv
```

```bash
TimelineExplorer.exe C:\Output\prefetch.csv
```

Prefetch 对确认程序运行次数、最后运行时间和加载文件很有价值。
