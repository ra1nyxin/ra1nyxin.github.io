# PowerUp 常用用法

PowerUp 适合 Windows 本地提权检查。常用命令：`Invoke-AllChecks`、`Get-UnquotedService`、`Get-ModifiableServiceFile`。

```powershell
Import-Module .\PowerUp.ps1
```

```powershell
Invoke-AllChecks
```

```powershell
Get-UnquotedService
```

```powershell
Get-ModifiableServiceFile
```

PowerUp 的重点是找服务权限、计划任务、注册表和可写路径。检查结果要手工确认实际可利用性。
