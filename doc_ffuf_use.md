# ffuf 常用用法

这篇记录 ffuf 的常用命令。它适合在授权测试里做目录、文件、参数和值枚举。命令跑之前先确认目标范围，字典也要按场景选。

## 基础目录枚举

最常见的目录枚举。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt
```

指定线程数。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -t 40
```

加请求头。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -H "User-Agent: Mozilla/5.0"
```

带 Cookie。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -H "Cookie: session=SESSION_VALUE"
```

## 状态码和长度过滤

只匹配指定状态码。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200,204,301,302,307,401,403
```

过滤指定响应长度。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fs 1234
```

过滤指定单词数。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fw 42
```

过滤指定行数。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fl 18
```

## 扩展名枚举

给字典项追加扩展名。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -e .php,.txt,.bak,.zip
```

只枚举备份类文件。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -e .bak,.old,.backup,.swp
```

## 参数枚举

GET 参数名枚举。

```bash
ffuf -u "https://example.com/search?FUZZ=test" -w params.txt
```

POST 参数名枚举。

```bash
ffuf -u https://example.com/login -X POST -d "FUZZ=test" -H "Content-Type: application/x-www-form-urlencoded" -w params.txt
```

参数值枚举。

```bash
ffuf -u "https://example.com/item?id=FUZZ" -w ids.txt
```

## 多字典

同时枚举目录和扩展。

```bash
ffuf -u https://example.com/W1.W2 -w names.txt:W1 -w exts.txt:W2
```

Host 头枚举子域。

```bash
ffuf -u https://example.com/ -H "Host: FUZZ.example.com" -w subdomains.txt
```

## 输出保存

保存 JSON。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -of json -o ffuf.json
```

保存 HTML 报告。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -of html -o ffuf.html
```

## 小记录

ffuf 的关键是先找到正常 404 或空响应的特征，再用 `-fs`、`-fw`、`-fl` 把噪声压下去。没有过滤的结果经常很热闹，但真正可用的信息会被埋住。
