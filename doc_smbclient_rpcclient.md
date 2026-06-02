# smbclient 和 rpcclient 使用笔记

`smbclient` 和 `rpcclient` 都来自 Samba 工具集。前者更像命令行版文件共享客户端，用来看共享、列目录、上传下载文件；后者直接和 MSRPC 接口说话，适合查询域用户、组、密码策略和部分主机信息。两者经常一起用，但关注点不一样。

先用 `smbclient -L` 看目标暴露了哪些共享。匿名访问用 `-N`，域账号用 `-U 'DOMAIN\user'`。如果目标只支持较新的协议，或者环境禁用了 SMB1，必要时指定 SMB2/SMB3。

```bash
smbclient -L //192.168.1.10 -N
smbclient -L //192.168.1.10 -U 'EXAMPLE\alice'
smbclient -L //192.168.1.10 -U 'EXAMPLE\alice' -m SMB3
```

能列出共享不代表能读写。真正判断权限要连到具体共享里看目录、尝试进入子目录、下载一个无敏感的小文件，或者上传到明确授权的测试目录。

```bash
smbclient //192.168.1.10/Share -U 'EXAMPLE\alice'
```

进入交互界面后常用命令很少，够用就行。

```text
pwd
ls
cd dirname
get file.txt
put local.txt remote.txt
recurse ON
prompt OFF
mget *
exit
```

单行模式适合脚本和留证据。目录名有空格时要注意引号，下载大量文件前先确认大小和范围。

```bash
smbclient //192.168.1.10/Share -N -c 'ls'
smbclient //192.168.1.10/Share -U 'EXAMPLE\alice' -c 'cd Reports; ls'
smbclient //192.168.1.10/Share -U 'EXAMPLE\alice' -c 'get report.txt'
```

如果遇到协议协商失败，可以显式指定协议版本。老设备可能只支持 SMB1，但生产环境里启用 SMB1 本身就是风险点，记录时要单独标出来。

```bash
smbclient //192.168.1.10/Share -U 'EXAMPLE\alice' -m SMB2
smbclient //192.168.1.10/Share -U 'EXAMPLE\alice' -m SMB3
```

`rpcclient` 更适合查目录和策略信息。匿名是否可用要看目标配置，很多现代域环境会禁掉匿名 RPC，但老机器或配置宽松的服务器上仍可能拿到有价值的枚举结果。

```bash
rpcclient -U '' -N 192.168.1.10
rpcclient -U 'EXAMPLE\alice' 192.168.1.10
```

进入 rpcclient 后，常用的是用户、组、别名和密码策略相关命令。输出里的 RID、用户名和组关系，后续可以用来核对权限边界。

```text
srvinfo
enumdomusers
enumdomgroups
enumalsgroups builtin
queryuser 0x1f4
querygroup 0x200
getdompwinfo
lookupnames administrator
lookupsids S-1-5-21-...
```

单行查询更适合保存结果。

```bash
rpcclient -U '' -N 192.168.1.10 -c 'srvinfo'
rpcclient -U '' -N 192.168.1.10 -c 'enumdomusers'
rpcclient -U 'EXAMPLE\alice' 192.168.1.10 -c 'getdompwinfo'
```

排错时先看网络和协议，再看认证。`NT_STATUS_LOGON_FAILURE` 通常是凭据问题，`NT_STATUS_ACCESS_DENIED` 是权限或匿名限制，`protocol negotiation failed` 多半和 SMB 版本有关。域账号格式也很容易写错，`DOMAIN\user`、`user@domain.local` 和本地 `.\user` 在不同场景下含义不同。

我的使用顺序一般是：先 `smbclient -L` 看共享，再连接重点共享确认读写权限，最后用 `rpcclient` 查用户、组和策略。这样能把“文件面”和“身份面”分开，不会把共享权限问题误判成账号不存在。
