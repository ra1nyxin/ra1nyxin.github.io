# curl 和 HTTP 调试笔记

`curl` 是排 HTTP、TLS、代理、重定向、Cookie 和接口行为的第一把工具。它适合快速确认“请求发出去了没有、服务返回了什么、握手卡在哪、状态码和耗时是多少”。复杂浏览器登录态、前端签名、WebSocket 或强指纹场景，curl 不是万能，但第一轮定位足够快。

最基础的请求：

```bash
curl https://example.com
```

查看响应头和响应体用 `-i`，只看响应头用 `-I`。`-L` 会跟随跳转，排登录跳转和 CDN 跳转时很常用。

```bash
curl -i https://example.com
curl -I https://example.com
curl -L https://example.com
```

排连接和 TLS 时加 `-v`。它会显示 DNS、连接、TLS 协商、证书、请求头和响应头。输出很长，但第一处异常通常很明显。

```bash
curl -v https://example.com
```

只想要状态码和耗时时，用 `-s -o /dev/null -w`。这适合健康检查和脚本。

```bash
curl -s -o /dev/null -w "code=%{http_code} time=%{time_total}\n" https://example.com
```

发送 JSON 时，`Content-Type` 要写对。复杂 JSON 建议放文件里，用 `@file` 传，避免 shell 引号折磨。

```bash
curl -X POST https://api.example.com/login \
  -H "Content-Type: application/json" \
  -d '{"user":"test","password":"test"}'
```

从文件发送 JSON：

```bash
curl -X POST https://api.example.com/items \
  -H "Content-Type: application/json" \
  --data-binary @payload.json
```

普通表单和 multipart 表单不要混。`-d` 默认是 `application/x-www-form-urlencoded`，上传文件用 `-F`。

```bash
curl -X POST https://example.com/login -d "username=test&password=test"
curl -X POST https://example.com/upload -F "file=@./test.txt"
```

Header 和 Cookie 都用 `-H` 可以写，但 Cookie 文件更适合连续请求。`-c` 保存服务端返回的 Cookie，`-b` 下次读取。

```bash
curl -c cookies.txt https://example.com/login
curl -b cookies.txt https://example.com/profile
curl https://api.example.com/user -H "Authorization: Bearer TOKEN"
```

下载文件时，`-O` 使用远端文件名，`-o` 指定本地文件名。下载经常遇到跳转，所以通常带 `-L`。

```bash
curl -LO https://example.com/file.zip
curl -L https://example.com/file.zip -o file.zip
```

上传原始二进制不要用 `-d`，用 `--data-binary`，否则换行和特殊字符可能被处理。

```bash
curl -X PUT https://example.com/upload/test.bin --data-binary "@test.bin"
```

代理调试用 `-x`。抓包代理、Burp、mitmproxy 都可以这样接。HTTPS 代理调试时，如果代理证书不被信任，会看到证书错误。

```bash
curl -x http://127.0.0.1:8080 https://example.com
```

超时参数建议在脚本里都写上。`--connect-timeout` 是连接阶段，`--max-time` 是整个请求总耗时。

```bash
curl --connect-timeout 5 --max-time 15 https://example.com
```

自签证书临时调试可以用 `-k`，但不要把它写进长期脚本。更好的方式是把测试 CA 加到信任库，或者用 `--cacert` 指定 CA 文件。

```bash
curl -k https://self-signed.example.com
curl --cacert ./ca.pem https://internal.example.com
```

需要固定解析到某个 IP 时，用 `--resolve`，比改 hosts 更可控。排 CDN、负载均衡、蓝绿发布时很有用。

```bash
curl --resolve example.com:443:203.0.113.10 https://example.com/
```

HTTP/2、HTTP/1.1 差异也能直接指定。

```bash
curl --http1.1 https://example.com
curl --http2 https://example.com
```

JSON 响应可以直接接 jq。脚本里先判断状态码，再处理 body，会比盲目 jq 稳定。

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io \
  | jq "{name, default_branch, stars: .stargazers_count}"
```

我排 HTTP 问题一般先看 `curl -v`，确认 DNS、TCP、TLS、请求头、状态码和重定向；再用 `-w` 量化耗时；最后才复刻完整 Header、Cookie 和 body。curl 命令越长，越要从浏览器 DevTools 或代理里复制真实请求，避免自己手写漏字段。
