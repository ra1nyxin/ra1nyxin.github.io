# EvtxECmd 常用用法

这篇记录 EvtxECmd 的常用命令。它适合把 Windows EVTX 日志导成 CSV 或 JSON，后面用表格、grep、jq 分析都方便。

## 基础解析

解析目录。

```bash
EvtxECmd.exe -d C:\Evidence\evtx --csv C:\Output
```

解析单个文件。

```bash
EvtxECmd.exe -f C:\Evidence\Security.evtx --csv C:\Output
```

输出 JSON。

```bash
EvtxECmd.exe -d C:\Evidence\evtx --json C:\Output
```

## 常见选项

指定时间格式。

```bash
EvtxECmd.exe -d C:\Evidence\evtx --csv C:\Output --dt yyyy-MM-ddTHH:mm:ss
```

去掉 payload。

```bash
EvtxECmd.exe -d C:\Evidence\evtx --csv C:\Output --noMaps
```

## 结果分析

搜索登录事件。

```powershell
Select-String -Path C:\Output\*.csv -Pattern "4624"
```

搜索 PowerShell。

```powershell
Select-String -Path C:\Output\*.csv -Pattern "PowerShell"
```

## 备注

EvtxECmd 适合先把事件日志转成统一格式，再交给 Hayabusa、Chainsaw 或表格分析。关键是保存原始 EVTX 和导出结果对应关系。
