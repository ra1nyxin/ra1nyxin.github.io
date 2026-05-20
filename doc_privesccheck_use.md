# PrivescCheck 常用用法

这篇记录 PrivescCheck 的常用命令。它适合在授权 Windows 环境里做本地权限提升检查，输出会覆盖服务、权限、注册表、凭据和配置问题。

## 基础运行

运行脚本。

```powershell
powershell -ExecutionPolicy Bypass -File .\PrivescCheck.ps1
```

当前 PowerShell 会话加载。

```powershell
. .\PrivescCheck.ps1
```

运行扩展检查。

```powershell
Invoke-PrivescCheck -Extended
```

保存报告。

```powershell
Invoke-PrivescCheck -Report PrivescCheck
```

## 输出格式

生成 HTML。

```powershell
Invoke-PrivescCheck -Format HTML -Output privesc.html
```

生成 TXT。

```powershell
Invoke-PrivescCheck -Format TXT -Output privesc.txt
```

## 常见搭配

查看当前用户权限。

```cmd
whoami /all
```

查看系统信息。

```cmd
systeminfo
```

## 备注

PrivescCheck 适合先跑一遍拿线索，再手工验证服务权限、可写路径、凭据文件和计划任务。报告里标出来的风险要结合当前用户权限判断。
