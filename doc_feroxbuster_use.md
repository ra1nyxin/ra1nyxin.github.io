# Feroxbuster 常用用法

这篇记录 Feroxbuster 的常用命令。它和 ffuf 都能做 Web 内容发现，Feroxbuster 更偏递归枚举和自动化爬目录，适合授权环境里的 Web 目录梳理。

## 基础扫描

扫描一个站点。

```bash
feroxbuster -u http://192.168.1.10
```

指定字典。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt
```

指定线程。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -t 20
```

限制递归深度。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -d 2
```

## 扩展名和过滤

指定扩展名。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -x php,txt,bak,zip
```

过滤状态码。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -C 404,403
```

过滤响应大小。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -S 1234
```

只保留常见成功状态。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -s 200,204,301,302,307,401,403
```

## 请求设置

添加 Header。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -H "Cookie: session=VALUE"
```

设置 User-Agent。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -A "Mozilla/5.0"
```

走代理。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -p http://127.0.0.1:8080
```

忽略证书错误。

```bash
feroxbuster -u https://192.168.1.10 -w wordlist.txt -k
```

## 输出

保存结果。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt -o ferox.txt
```

输出 JSON。

```bash
feroxbuster -u http://192.168.1.10 -w wordlist.txt --json -o ferox.json
```

## 备注

Feroxbuster 默认递归能力很方便，也更容易扫出大量噪声。先找 404 页面长度和站点跳转规律，再设置过滤条件，结果会干净很多。
