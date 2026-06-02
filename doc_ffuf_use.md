# ffuf 使用笔记

`ffuf` 很适合在授权测试里做目录、文件、参数和值枚举。它的优势是快、过滤灵活、输入位置自由。真正决定结果质量的不是线程开多高，而是你有没有先识别目标的“正常噪声”：默认 404、统一跳转、WAF 拦截页、登录页、空搜索结果，这些都要先压掉。

最基础的目录枚举如下，`FUZZ` 是字典项替换的位置。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt
```

线程数要按目标和网络情况调。内网页面可以高一点，公网业务系统不建议盲目拉满。先跑小字典观察响应特征，再扩大范围。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -t 40
```

带 Cookie、认证头或自定义 User-Agent 时，用 `-H`。需要多个请求头就写多个 `-H`。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt \
  -H "Cookie: session=SESSION_VALUE" \
  -H "User-Agent: Mozilla/5.0"
```

过滤是 ffuf 的核心。很多站点不存在路径时也返回 200，这时只看状态码会得到一屏垃圾。先请求一个随机路径，记下响应长度、单词数、行数，再用 `-fs`、`-fw`、`-fl` 过滤。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -fs 1234
ffuf -u https://example.com/FUZZ -w wordlist.txt -fw 42
ffuf -u https://example.com/FUZZ -w wordlist.txt -fl 18
```

状态码匹配也要按场景写。目录枚举里 200、204、301、302、307、401、403 都可能有价值。403 不代表没用，很多时候说明路径存在但权限不够。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -mc 200,204,301,302,307,401,403
```

扩展名枚举适合老站、备份文件和静态资源目录。不要对所有路径盲目追加几十个扩展名，结果会膨胀得很快。

```bash
ffuf -u https://example.com/FUZZ -w names.txt -e .php,.txt,.bak,.zip
ffuf -u https://example.com/FUZZ -w names.txt -e .bak,.old,.backup,.swp
```

参数名枚举要看请求方法。GET 参数直接放在 URL 里，POST 参数要设置方法、body 和 Content-Type。遇到 JSON API，body 也要按 JSON 写。

```bash
ffuf -u "https://example.com/search?FUZZ=test" -w params.txt
ffuf -u https://example.com/login -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "FUZZ=test" \
  -w params.txt
```

JSON 请求示例：

```bash
ffuf -u https://example.com/api/search -X POST \
  -H "Content-Type: application/json" \
  -d '{"FUZZ":"test"}' \
  -w params.txt
```

参数值枚举要特别注意业务副作用。只对明确安全的参数和值范围做测试，避免触发批量写入、下单、删除或通知。

```bash
ffuf -u "https://example.com/item?id=FUZZ" -w ids.txt -mc 200,403
```

多字典可以给不同位置命名。比如同时枚举文件名和扩展名：

```bash
ffuf -u https://example.com/W1.W2 -w names.txt:W1 -w exts.txt:W2
```

Host 头枚举适合有统一入口的虚拟主机场景。目标服务如果对 Host 不存在也返回同一页面，一定先做长度过滤。

```bash
ffuf -u https://192.0.2.10/ -H "Host: FUZZ.example.com" -w subdomains.txt -fs 4242
```

递归枚举可以用 `-recursion`，但要控制深度和过滤条件。不然一个软 404 页面就能让扫描无限扩散。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -recursion -recursion-depth 2
```

输出建议保存 JSON，后续可以用 jq 处理。临时汇报可以导 HTML。

```bash
ffuf -u https://example.com/FUZZ -w wordlist.txt -of json -o ffuf.json
ffuf -u https://example.com/FUZZ -w wordlist.txt -of html -o ffuf.html
```

我的 ffuf 流程是：先手工访问随机路径，记录噪声特征；再跑小字典调过滤；确认过滤稳定后扩大字典；最后把 401/403/重定向结果单独复核。没有过滤的 ffuf 很热闹，但高质量结果通常来自前面那几分钟的校准。
