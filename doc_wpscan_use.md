# WPScan 常用用法

这篇记录 WPScan 的常用命令。它适合在授权环境里检查 WordPress 站点版本、插件、主题、用户枚举和基础配置问题。

## 基础扫描

扫描站点。

```bash
wpscan --url http://192.168.1.10
```

忽略 TLS 证书。

```bash
wpscan --url https://192.168.1.10 --disable-tls-checks
```

指定 User-Agent。

```bash
wpscan --url http://192.168.1.10 --user-agent "Mozilla/5.0"
```

走代理。

```bash
wpscan --url http://192.168.1.10 --proxy http://127.0.0.1:8080
```

## 枚举

枚举插件。

```bash
wpscan --url http://192.168.1.10 --enumerate p
```

枚举易受影响插件。

```bash
wpscan --url http://192.168.1.10 --enumerate vp
```

枚举主题。

```bash
wpscan --url http://192.168.1.10 --enumerate t
```

枚举用户。

```bash
wpscan --url http://192.168.1.10 --enumerate u
```

## API Token

带 API Token 扫描。

```bash
wpscan --url http://192.168.1.10 --api-token API_TOKEN
```

枚举并查询漏洞库。

```bash
wpscan --url http://192.168.1.10 --enumerate vp,vt,u --api-token API_TOKEN
```

## 认证场景

使用 Cookie。

```bash
wpscan --url http://192.168.1.10 --cookie-string "wordpress_logged_in=value"
```

基础认证。

```bash
wpscan --url http://192.168.1.10 --http-auth USER:PASSWORD
```

## 输出

输出到文件。

```bash
wpscan --url http://192.168.1.10 -o wpscan.txt
```

输出 JSON。

```bash
wpscan --url http://192.168.1.10 -f json -o wpscan.json
```

## 备注

WPScan 的插件和主题枚举很实用。结果要结合页面源码、插件目录和后台可见信息确认，版本号隐藏或被缓存时，工具输出可能会偏保守。
