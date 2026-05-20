# Snaffler 常用用法

Snaffler 适合在 Windows 文件共享里找敏感文件。常用参数：扫描网段、域、输出文件和过滤级别。

```powershell
.\Snaffler.exe -s
```

```powershell
.\Snaffler.exe -d example.local -o snaffler.txt
```

```powershell
.\Snaffler.exe -t 192.168.1.0/24 -o snaffler.txt
```

```powershell
.\Snaffler.exe -i
```

Snaffler 适合找配置、密码、备份和脚本。比赛里共享目录一多，它能比手工浏览快很多。
