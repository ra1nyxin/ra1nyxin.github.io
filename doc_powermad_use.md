# PowerMad 常用用法

这篇记录 PowerMad 的常用命令。它常用于 Windows/AD 环境里的机器账号操作和一些和机器账户相关的测试。

## 加载模块

导入模块。

```powershell
Import-Module .\Powermad.ps1
```

查看可用命令。

```powershell
Get-Command -Module Powermad
```

## 机器账号

新建机器账号。

```powershell
New-MachineAccount -MachineAccount TEST01 -Password (ConvertTo-SecureString 'Passw0rd!' -AsPlainText -Force)
```

列出机器账号。

```powershell
Get-MachineAccount
```

查看当前机器账号属性。

```powershell
Get-MachineAccount -MachineAccount TEST01
```

修改机器账号属性。

```powershell
Set-MachineAccountAttribute -MachineAccount TEST01 -Attribute dnsHostName -Value test.example.local
```

## 小记录

机器账号相关操作通常和委派、AD CS 或一些特定 ACL 测试放在一起看。做完以后要把改动记下来，后面排查域里异常对象会更清楚。
