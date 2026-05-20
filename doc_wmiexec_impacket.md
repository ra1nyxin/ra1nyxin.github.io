# wmiexec.py 使用

wmiexec.py 通过 WMI 执行命令，常用于 Windows 远程管理验证。

## 常用命令

```bash
wmiexec.py domain.local/user:pass@192.168.1.10
```

```bash
wmiexec.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
wmiexec.py -k -no-pass domain.local/user@host.domain.local
```

```bash
wmiexec.py -dc-ip 192.168.1.10 domain.local/user:pass@host
```

```bash
wmiexec.py -nooutput domain.local/user:pass@192.168.1.10
```

WMI 日志和 EDR 记录较明显，授权测试里要标注执行时间和命令内容。
