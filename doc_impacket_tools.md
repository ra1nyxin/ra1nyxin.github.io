# Impacket 常用工具笔记

Impacket 是一组围绕 Windows 网络协议写的 Python 工具。它覆盖 SMB、MSRPC、Kerberos、MSSQL、NTLM、LDAP 相关场景，适合在授权内网测试、故障复现和实验环境里快速验证协议行为。它的命令看起来分散，但核心格式很固定：身份、目标、认证材料、协议参数。

最常见的身份写法是：

```bash
DOMAIN/USER:'PASSWORD'@192.168.1.10
```

如果没有域，可以写成本地账号：

```bash
./USER:'PASSWORD'@192.168.1.10
```

密码里有特殊字符时，外层引号别省。使用 NTLM hash 时，格式是 `LMHASH:NTHASH`，没有 LM hash 就留空。

```bash
impacket-wmiexec -hashes :NTHASH DOMAIN/USER@192.168.1.10
```

远程命令执行类工具经常被放在一起比较。`psexec` 会创建服务并上传/运行组件，行为最重；`wmiexec` 走 WMI，通常不落服务文件，但依赖远端 WMI 和管理权限；`smbexec` 也是服务思路，但交互体验和痕迹不同。排查失败时不要只换密码，先确认 SMB、ADMIN$、远程服务管理、UAC 远程限制和防火墙策略。

```bash
impacket-psexec DOMAIN/USER:'PASSWORD'@192.168.1.10
impacket-wmiexec DOMAIN/USER:'PASSWORD'@192.168.1.10
impacket-smbexec DOMAIN/USER:'PASSWORD'@192.168.1.10
```

Kerberos 场景里，时间、DNS 和 SPN 比密码本身还容易出问题。域控时间差太大、目标用 IP 而不是主机名、DNS 后缀不对，都会导致看起来像认证失败。拿 TGT 后可以用 ccache，再让其他工具通过 `-k -no-pass` 使用它。

```bash
impacket-getTGT EXAMPLE.LOCAL/alice:'PASSWORD' -dc-ip 192.168.1.10
export KRB5CCNAME=alice.ccache
impacket-wmiexec -k -no-pass EXAMPLE.LOCAL/alice@dc01.example.local
```

请求服务票据常用于验证 SPN 配置和 Kerberos 访问路径。授权测试里经常用 `GetUserSPNs` 看服务账号暴露情况。输出里要关注 SPN、账号、加密类型和请求是否成功。

```bash
impacket-GetUserSPNs EXAMPLE.LOCAL/alice:'PASSWORD' -dc-ip 192.168.1.10
impacket-GetUserSPNs EXAMPLE.LOCAL/alice:'PASSWORD' -dc-ip 192.168.1.10 -request
```

AS-REP 查询适合检查“不要求 Kerberos 预认证”的账号。它依赖目录查询和域控响应，用户列表质量会直接影响结果。

```bash
impacket-GetNPUsers EXAMPLE.LOCAL/ -usersfile users.txt -dc-ip 192.168.1.10 -no-pass
```

SMB 文件侧，`smbserver` 很适合临时共享目录，传工具、收文件、复现 UNC 访问都方便。生产或多人环境里建议带用户名密码，并明确共享目录，不要随手把整个工作目录暴露出去。

```bash
impacket-smbserver share . -smb2support
impacket-smbserver share ./drop -smb2support -username user -password 'PASSWORD'
```

MSSQL 连接要区分 SQL 认证和 Windows 认证。进 `mssqlclient` 后先看当前用户、数据库和权限，再决定下一步做什么。

```bash
impacket-mssqlclient EXAMPLE.LOCAL/alice:'PASSWORD'@192.168.1.20 -windows-auth
```

凭据转储类命令要更谨慎。`secretsdump` 的失败原因可能是权限不足、远程注册表不可用、ADMIN$ 不可写、目标防护拦截，也可能是域控策略限制。离线分析 `ntds.dit` 时，SYSTEM hive 要和 ntds 文件匹配。

```bash
impacket-secretsdump EXAMPLE.LOCAL/alice:'PASSWORD'@192.168.1.10
impacket-secretsdump -ntds ntds.dit -system SYSTEM LOCAL
```

排错时我通常按这个顺序看：目标端口 445/135/5985/1433 是否可达，账号格式是否正确，域名和 DNS 是否一致，时间是否同步，权限是否够，远端服务是否允许对应协议。Impacket 的报错有时很长，但关键词通常藏在最后几行，尤其是 `STATUS_LOGON_FAILURE`、`STATUS_ACCESS_DENIED`、`KDC_ERR_*` 和 `rpc_s_access_denied`。
