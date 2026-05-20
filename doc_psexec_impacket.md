# psexec.py 使用

Impacket psexec.py 用于通过 SMB 服务执行命令，适合授权验证远程管理路径。

## 常用命令

```bash
psexec.py domain.local/user:pass@192.168.1.10
```

```bash
psexec.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
psexec.py -k -no-pass domain.local/user@host.domain.local
```

```bash
psexec.py -service-name audit domain.local/user:pass@192.168.1.10
```

```bash
psexec.py -target-ip 192.168.1.10 domain.local/user:pass@host
```

小记录：它会创建服务，测试后要确认服务和临时文件已经清理。
