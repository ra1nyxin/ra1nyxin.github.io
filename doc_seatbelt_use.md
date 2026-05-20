# Seatbelt 常用用法

Seatbelt 适合 Windows 本地信息枚举。常用参数：检查项名称，`-group=all` 全量，`-outputfile` 保存结果。

```powershell
.\Seatbelt.exe -group=all
```

```powershell
.\Seatbelt.exe InterestingFiles
```

```powershell
.\Seatbelt.exe WindowsCredentialFiles
```

```powershell
.\Seatbelt.exe -group=user -outputfile=seatbelt.txt
```

小记录：Seatbelt 适合补 Windows 现场信息。比赛里重点看凭据痕迹、自动登录、历史命令、服务和防护配置。
