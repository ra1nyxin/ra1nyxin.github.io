# SharpHound 常用用法

这篇记录 SharpHound 的常用命令。它适合在 Windows 目标里采集 BloodHound 数据，后面在图里看用户、组、ACL、会话和委派关系会很方便。

## 基础采集

采集全部数据。

```powershell
SharpHound.exe -c All -d example.local
```

只采集会话和本地组。

```powershell
SharpHound.exe -c Session,LocalGroup -d example.local
```

只采集对象属性和信任关系。

```powershell
SharpHound.exe -c ObjectProps,Trusts -d example.local
```

指定输出文件名。

```powershell
SharpHound.exe -c All -d example.local -zipfilename bh.zip
```

## 采集选项

排除域控。

```powershell
SharpHound.exe -c All -d example.local -ExcludeDCs
```

只做当前用户相关采集。

```powershell
SharpHound.exe -c All -d example.local -CollectionMethod Session,Group
```

关闭 SMB 传输。

```powershell
SharpHound.exe -c All -d example.local -NoSaveCache
```

## 结果处理

查看生成的 ZIP。

```powershell
dir
```

把 ZIP 导入 BloodHound。

```text
Import Data
```

## 小记录

SharpHound 采集前先确认账号权限和目标范围。采集过多会让结果很大，通常先用常见集合把会话、组和对象关系拿到，再补特殊项。
