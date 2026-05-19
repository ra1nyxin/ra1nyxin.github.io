# smbmap 常用用法

这篇记录 smbmap 的常用命令。它适合快速看 SMB 共享权限、读写权限和文件浏览能力。

## 基础枚举

列共享权限。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD'
```

只列共享。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' --shares
```

查看所有可写共享。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' --writable
```

递归查看共享目录。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' -r SHARE
```

## 文件操作

下载共享里的文件。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' --download 'SHARE\file.txt'
```

上传文件到共享。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' --upload local.txt 'SHARE\local.txt'
```

查看权限细节。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' --no-banner
```

## 常见场景

用 hash 登录。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' --hash-type ntlm
```

列出共享里的目录树。

```bash
smbmap -H 192.168.1.10 -u USER -p 'PASSWORD' -R SHARE
```

## 小记录

smbmap 很适合先摸清共享权限，再决定是直接读文件、找脚本，还是继续做更细的 SMB 枚举。结果里最值得记的是可写共享和能下载到的配置文件。
