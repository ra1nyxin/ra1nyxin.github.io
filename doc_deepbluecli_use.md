# DeepBlueCLI 使用

DeepBlueCLI 用于快速分析 Windows 事件日志中的可疑行为。

## 常用命令

```bash
powershell -ExecutionPolicy Bypass -File .\DeepBlue.ps1
```

```bash
powershell -ExecutionPolicy Bypass -File .\DeepBlue.ps1 .\Security.evtx
```

```bash
powershell -ExecutionPolicy Bypass -File .\DeepBlue.ps1 .\System.evtx
```

```bash
Get-WinEvent -Path .\Security.evtx | Select-Object -First 5
```

```bash
wevtutil epl Security Security.evtx
```

小记录：它适合第一轮事件筛查，后续要回到原始事件 ID 和时间线。
