# Inveigh 常用用法

Inveigh 适合 Windows 环境里的 LLMNR、NBNS、mDNS 毒化测试。常用参数：`-LLMNR`、`-NBNS`、`-mDNS`、`-ConsoleOutput`。

```powershell
.\Inveigh.ps1
```

```powershell
Invoke-Inveigh -LLMNR Y -NBNS Y -mDNS Y
```

```powershell
Invoke-Inveigh -ConsoleOutput Y -HTTP Y
```

```powershell
Invoke-Inveigh -OutputFolder C:\Inveigh
```

小记录：Inveigh 和 Responder 的定位接近，但更适合 Windows 侧运行。比赛里要盯好日志目录和输出文件。
