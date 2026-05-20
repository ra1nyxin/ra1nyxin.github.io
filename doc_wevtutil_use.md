# wevtutil 使用

wevtutil 是 Windows 内置事件日志工具，适合导出、查询和清理测试日志。

## 常用命令

```bash
wevtutil el
```

```bash
wevtutil qe Security /c:5 /f:text
```

```bash
wevtutil epl Security C:\Temp\Security.evtx
```

```bash
wevtutil gli Security
```

```bash
wevtutil qe Microsoft-Windows-PowerShell/Operational /q:"*[System[(EventID=4104)]]" /f:text
```

小记录：授权排查时优先导出 evtx，直接在生产机上做复杂查询容易漏上下文。
