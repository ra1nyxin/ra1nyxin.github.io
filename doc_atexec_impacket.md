# atexec.py 使用

atexec.py 通过计划任务远程执行命令，适合验证 Windows 任务调度权限。

## 常用命令

```bash
atexec.py domain.local/user:pass@192.168.1.10 whoami
```

```bash
atexec.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10 whoami
```

```bash
atexec.py -k -no-pass domain.local/user@host.domain.local whoami
```

```bash
atexec.py domain.local/user:pass@192.168.1.10 "ipconfig /all"
```

```bash
atexec.py -silentcommand domain.local/user:pass@192.168.1.10 whoami
```

任务调度相关事件容易定位，测试后要确认没有残留任务。
