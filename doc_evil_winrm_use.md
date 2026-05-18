# Evil-WinRM 常用用法

这篇记录 Evil-WinRM 的常用命令。它适合在授权 Windows 环境里通过 WinRM 进行远程管理和交互式验证。

## 基础连接

使用用户名和密码连接。

```bash
evil-winrm -i 192.168.1.10 -u USER -p 'PASSWORD'
```

指定域用户。

```bash
evil-winrm -i 192.168.1.10 -u 'DOMAIN\USER' -p 'PASSWORD'
```

使用 NTLM hash。

```bash
evil-winrm -i 192.168.1.10 -u USER -H NTLM_HASH
```

指定 SSL。

```bash
evil-winrm -S -i 192.168.1.10 -u USER -p 'PASSWORD'
```

## 文件操作

上传文件。

```text
upload local.exe C:\Windows\Temp\local.exe
```

下载文件。

```text
download C:\Windows\Temp\result.txt result.txt
```

查看当前目录。

```text
pwd
```

列目录。

```text
dir
```

## PowerShell 操作

查看当前用户。

```powershell
whoami /all
```

查看主机名。

```powershell
hostname
```

查看网络配置。

```powershell
ipconfig /all
```

查看进程。

```powershell
Get-Process
```

## 脚本加载

指定本地脚本目录。

```bash
evil-winrm -i 192.168.1.10 -u USER -p 'PASSWORD' -s ./scripts
```

指定本地可执行文件目录。

```bash
evil-winrm -i 192.168.1.10 -u USER -p 'PASSWORD' -e ./bin
```

菜单。

```text
menu
```

## 小记录

Evil-WinRM 前先确认目标 WinRM 端口开放，常见是 5985 和 5986。连接成功后先记录当前用户、主机名、权限组和工作目录，后续操作会清楚很多。
