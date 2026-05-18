# NetExec 常用用法

这篇记录 NetExec 的常用命令。NetExec 是 CrackMapExec 的社区延续版本，常用于授权环境里的 SMB、WinRM、LDAP、RDP、MSSQL 服务验证和信息枚举。

## SMB 基础探测

探测 SMB。

```bash
nxc smb 192.168.1.10
```

探测一个网段。

```bash
nxc smb 192.168.1.0/24
```

指定用户名和密码。

```bash
nxc smb 192.168.1.10 -u USER -p 'PASSWORD'
```

使用本地认证。

```bash
nxc smb 192.168.1.10 -u USER -p 'PASSWORD' --local-auth
```

## 共享和用户

列 SMB 共享。

```bash
nxc smb 192.168.1.10 -u USER -p 'PASSWORD' --shares
```

列登录用户。

```bash
nxc smb 192.168.1.10 -u USER -p 'PASSWORD' --loggedon-users
```

列本地用户。

```bash
nxc smb 192.168.1.10 -u USER -p 'PASSWORD' --users
```

查看密码策略。

```bash
nxc smb 192.168.1.10 -u USER -p 'PASSWORD' --pass-pol
```

## Hash 和 Kerberos

使用 NTLM hash。

```bash
nxc smb 192.168.1.10 -u USER -H NTLM_HASH
```

使用 Kerberos。

```bash
nxc smb dc01.domain.local -u USER -p 'PASSWORD' -k
```

指定域。

```bash
nxc smb 192.168.1.10 -d DOMAIN -u USER -p 'PASSWORD'
```

## WinRM 和 RDP

验证 WinRM。

```bash
nxc winrm 192.168.1.10 -u USER -p 'PASSWORD'
```

验证 RDP。

```bash
nxc rdp 192.168.1.10 -u USER -p 'PASSWORD'
```

验证 MSSQL。

```bash
nxc mssql 192.168.1.10 -u USER -p 'PASSWORD'
```

## 模块

查看可用模块。

```bash
nxc smb -L
```

查看模块帮助。

```bash
nxc smb -M MODULE_NAME --options
```

运行指定模块。

```bash
nxc smb 192.168.1.10 -u USER -p 'PASSWORD' -M MODULE_NAME
```

## 小记录

NetExec 的结果适合做横向视角整理：哪些主机开了 SMB，哪些凭据能登录，哪些机器有 WinRM，哪些共享能读。批量扫网段前要控制线程和范围，避免把实验环境服务打得太吵。
