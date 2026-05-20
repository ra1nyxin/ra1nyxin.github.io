# MicroBurst 使用

MicroBurst 是 Azure 安全测试 PowerShell 工具集，适合枚举存储、应用和权限线索。

## 常用命令

```bash
Import-Module .\MicroBurst.psm1
```

```bash
Invoke-EnumerateAzureBlobs -Base company
```

```bash
Get-AzPasswords -Verbose
```

```bash
Get-AzDomainInfo -folder MicroBurst
```

```bash
Invoke-AzureRmVMBulkCMD -Verbose
```

小记录：Azure 测试要区分外部枚举和登录后枚举，输出目录要按租户整理。
