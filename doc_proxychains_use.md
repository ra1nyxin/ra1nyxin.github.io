# proxychains 常用用法

proxychains 适合让命令行工具走 SOCKS/HTTP 代理。常用配置在 `/etc/proxychains.conf` 或 `proxychains4.conf`。

```bash
proxychains4 nmap -sT -Pn -p 80,445 10.10.10.10
```

```bash
proxychains4 curl http://10.10.10.10
```

```bash
proxychains4 smbclient -L //10.10.10.10 -N
```

```bash
tail -n 20 /etc/proxychains4.conf
```

proxychains 适合 TCP 工具代理。Nmap 走代理时用 `-sT`，不要期望 SYN 扫描能正常过 SOCKS。
