# dcomexec.py 使用

dcomexec.py 通过 DCOM 远程执行命令，可用于对比 WMI 和 SMB 路径。

## 常用命令

```bash
dcomexec.py domain.local/user:pass@192.168.1.10
```

```bash
dcomexec.py -object MMC20 domain.local/user:pass@192.168.1.10
```

```bash
dcomexec.py -object ShellWindows domain.local/user:pass@192.168.1.10
```

```bash
dcomexec.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
dcomexec.py -k -no-pass domain.local/user@host.domain.local
```

小记录：DCOM 依赖防火墙和组件配置，失败时先检查 RPC 可达性和权限。
