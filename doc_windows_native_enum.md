# Windows 原生命令枚举

这篇记录 Windows 里常用的原生命令。没有额外工具时，这些命令能快速确认当前权限、系统信息、网络和服务。

## 身份和权限

查看当前用户。

```cmd
whoami
```

查看权限和组。

```cmd
whoami /all
```

查看主机名。

```cmd
hostname
```

查看用户。

```cmd
net user
```

查看本地管理员组。

```cmd
net localgroup administrators
```

## 系统和补丁

查看系统信息。

```cmd
systeminfo
```

查看环境变量。

```cmd
set
```

查看安装程序。

```cmd
wmic product get name,version
```

查看补丁。

```cmd
wmic qfe get Caption,Description,HotFixID,InstalledOn
```

## 网络和进程

查看网络配置。

```cmd
ipconfig /all
```

查看连接。

```cmd
netstat -ano
```

查看进程。

```cmd
tasklist /v
```

查看服务。

```cmd
sc query
```

查看计划任务。

```cmd
schtasks /query /fo LIST /v
```

## 小记录

Windows 原生命令适合快速建立现场感。先记录用户、组、系统版本、网络和服务，再决定要不要上 PowerView、PEAS 或 Sysinternals。
