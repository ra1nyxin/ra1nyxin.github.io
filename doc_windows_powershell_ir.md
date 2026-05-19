# PowerShell 应急排查命令

这篇记录 Windows PowerShell 里的常用排查命令。蓝队比赛里常用来查进程、网络、服务、计划任务和事件日志。

## 进程和网络

查看进程。

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 20
```

查看网络连接。

```powershell
Get-NetTCPConnection | Sort-Object State,LocalPort
```

查看监听端口。

```powershell
Get-NetTCPConnection -State Listen
```

按 PID 查进程。

```powershell
Get-Process -Id 1234
```

## 服务和任务

查看服务。

```powershell
Get-Service | Sort-Object Status,Name
```

查看计划任务。

```powershell
Get-ScheduledTask
```

查看启动项。

```powershell
Get-CimInstance Win32_StartupCommand
```

## 日志

查看安全日志登录事件。

```powershell
Get-WinEvent -FilterHashtable @{LogName='Security'; Id=4624} -MaxEvents 20
```

查看 PowerShell 日志。

```powershell
Get-WinEvent -LogName 'Microsoft-Windows-PowerShell/Operational' -MaxEvents 50
```

搜索事件关键字。

```powershell
Get-WinEvent -LogName Security -MaxEvents 200 | Where-Object {$_.Message -match 'administrator'}
```

## 小记录

PowerShell 适合快速看现场。比赛里先查网络连接、进程、服务、计划任务和关键事件，再决定是否导出 EVTX 做离线分析。
