# smbclient 和 rpcclient 常用用法

这篇记录 Samba 工具里的 smbclient、rpcclient 常用命令。它们适合确认共享权限、列文件、下载样本、查询用户和域信息。

## smbclient 查看共享

匿名列共享。

```bash
smbclient -L //192.168.1.10 -N
```

使用账号列共享。

```bash
smbclient -L //192.168.1.10 -U USER
```

指定域账号。

```bash
smbclient -L //192.168.1.10 -U 'DOMAIN\USER'
```

指定 SMB 协议版本。

```bash
smbclient -L //192.168.1.10 -N -m SMB3
```

## smbclient 连接共享

匿名连接共享。

```bash
smbclient //192.168.1.10/SHARE -N
```

使用账号连接共享。

```bash
smbclient //192.168.1.10/SHARE -U USER
```

连接后列文件。

```bash
ls
```

连接后下载文件。

```bash
get file.txt
```

连接后递归下载。

```bash
recurse ON
```

## smbclient 单行操作

列共享目录内容。

```bash
smbclient //192.168.1.10/SHARE -N -c 'ls'
```

下载指定文件。

```bash
smbclient //192.168.1.10/SHARE -N -c 'get file.txt'
```

上传指定文件。

```bash
smbclient //192.168.1.10/SHARE -U USER -c 'put local.txt remote.txt'
```

## rpcclient 基础

匿名连接 RPC。

```bash
rpcclient -U '' -N 192.168.1.10
```

使用账号连接 RPC。

```bash
rpcclient -U USER 192.168.1.10
```

枚举域用户。

```bash
enumdomusers
```

枚举域组。

```bash
enumdomgroups
```

查看密码策略。

```bash
getdompwinfo
```

## rpcclient 单行查询

匿名枚举用户。

```bash
rpcclient -U '' -N 192.168.1.10 -c 'enumdomusers'
```

查询用户 RID。

```bash
rpcclient -U '' -N 192.168.1.10 -c 'queryuser 0x1f4'
```

枚举别名组。

```bash
rpcclient -U '' -N 192.168.1.10 -c 'enumalsgroups builtin'
```

## 备注

smbclient 用来看共享和文件权限，rpcclient 用来看域、用户、组和策略信息。匿名访问如果能列到东西，先把输出保存下来，后面整理用户名和共享路径会用到。
