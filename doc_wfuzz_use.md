# WFuzz 常用用法

WFuzz 适合 HTTP 参数、目录和表单 fuzz。常用参数：`-w` 字典，`-u` URL，`-z` payload，`--hc` 过滤状态码。

```bash
wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ
```

```bash
wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ --hc 404
```

```bash
wfuzz -w wordlist.txt -u "http://192.168.1.10/index.php?FUZZ=test"
```

```bash
wfuzz -w wordlist.txt -u http://192.168.1.10/FUZZ -t 20
```

小记录：WFuzz 现在不算最轻快，但在复杂表单 fuzz、POST 参数和多 payload 组合时依然好用。
