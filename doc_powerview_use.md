# PowerView 常用用法

这篇记录 PowerView 的常用命令。它适合在授权 Windows 或 AD 环境里做 PowerShell 方式的目录枚举和权限检查。

## 模块加载

导入模块。

```powershell
Import-Module .\PowerView.ps1
```

确认导入成功。

```powershell
Get-Module PowerView
```

## 域枚举

查看域信息。

```powershell
Get-Domain
```

查看域用户。

```powershell
Get-DomainUser
```

查看域计算机。

```powershell
Get-DomainComputer
```

查看域组。

```powershell
Get-DomainGroup
```

查看组成员。

```powershell
Get-DomainGroupMember "Domain Admins"
```

## 本地和 ACL

查看本地管理员。

```powershell
Find-LocalAdminAccess
```

查看共享。

```powershell
Get-DomainShare
```

查看 GPO。

```powershell
Get-DomainGPO
```

查看 ACL。

```powershell
Get-DomainObjectAcl -Identity "CN=Domain Admins,CN=Users,DC=example,DC=local"
```

## 小记录

PowerView 的结果适合配合 BloodHound 一起看。先从用户、组、计算机和 ACL 入手，再查本机管理员和 GPO，很多提权路径会更明显。
