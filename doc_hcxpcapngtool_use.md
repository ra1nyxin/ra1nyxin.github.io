# hcxpcapngtool 使用

hcxpcapngtool 用于把 pcapng 转成 hashcat 可用格式。

## 常用命令

```bash
hcxpcapngtool -o hashes.22000 capture.pcapng
```

```bash
hcxpcapngtool -E essids.txt -I identities.txt -U usernames.txt capture.pcapng
```

```bash
hcxpcapngtool --info capture.pcapng
```

```bash
hcxpcapngtool -o hashes.22000 -k keylist.txt capture.pcapng
```

```bash
hashcat -m 22000 hashes.22000 wordlist.txt
```

转换后先看 hash 数量和 ESSID，避免把无效采集送去长时间破解。
