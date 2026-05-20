# rpcdump.py 使用

rpcdump.py 用于枚举 Windows RPC endpoint，适合查远程管理面和服务暴露。

## 常用命令

```bash
rpcdump.py 192.168.1.10
```

```bash
rpcdump.py ncacn_ip_tcp:192.168.1.10
```

```bash
rpcdump.py domain.local/user:pass@192.168.1.10
```

```bash
rpcdump.py -hashes LMHASH:NTHASH domain.local/user@192.168.1.10
```

```bash
rpcdump.py -port 135 192.168.1.10
```

小记录：RPC 枚举能帮助解释为什么某些远程执行或强制认证工具可用。
