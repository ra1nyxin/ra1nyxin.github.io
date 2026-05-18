# curl 和 HTTP 调试

这篇记录 curl 的常用写法。平时调接口、看响应头、带 Cookie、走代理、传文件，都可以先从这里拿命令改。

## 基础请求

直接请求一个地址，适合看接口是否能通。

```bash
curl https://example.com
```

显示响应头和响应体。

```bash
curl -i https://example.com
```

只看响应头。

```bash
curl -I https://example.com
```

跟随跳转。

```bash
curl -L https://example.com
```

显示详细连接过程，排查 TLS、代理、重定向时很有用。

```bash
curl -v https://example.com
```

## 请求方法和数据

发送 JSON。

```bash
curl -X POST https://api.example.com/login -H "Content-Type: application/json" -d "{\"user\":\"test\",\"password\":\"test\"}"
```

发送表单。

```bash
curl -X POST https://example.com/login -d "username=test&password=test"
```

发送 PUT 请求。

```bash
curl -X PUT https://api.example.com/item/1 -H "Content-Type: application/json" -d "{\"name\":\"demo\"}"
```

删除资源。

```bash
curl -X DELETE https://api.example.com/item/1
```

## Header 和 Cookie

加自定义 Header。

```bash
curl https://api.example.com/user -H "Authorization: Bearer TOKEN"
```

带 Cookie 请求。

```bash
curl https://example.com/profile -H "Cookie: session=SESSION_VALUE"
```

把服务端返回的 Cookie 保存到文件。

```bash
curl -c cookies.txt https://example.com/login
```

下次请求时读取 Cookie 文件。

```bash
curl -b cookies.txt https://example.com/profile
```

## 文件上传和下载

下载文件并保留远端文件名。

```bash
curl -O https://example.com/file.zip
```

下载到指定文件名。

```bash
curl -L https://example.com/file.zip -o file.zip
```

上传表单文件。

```bash
curl -X POST https://example.com/upload -F "file=@./test.txt"
```

上传原始二进制内容。

```bash
curl -X PUT https://example.com/upload/test.bin --data-binary "@test.bin"
```

## 代理和超时

走 HTTP 代理。

```bash
curl -x http://127.0.0.1:8080 https://example.com
```

限制总耗时，避免命令一直卡住。

```bash
curl --max-time 10 https://example.com
```

设置连接超时。

```bash
curl --connect-timeout 5 https://example.com
```

忽略证书校验，临时调试自签证书服务时会用到。

```bash
curl -k https://self-signed.example.com
```

## 状态码和输出整理

只输出 HTTP 状态码。

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://example.com
```

输出状态码和总耗时。

```bash
curl -s -o /dev/null -w "code=%{http_code} time=%{time_total}\n" https://example.com
```

安静模式配合 jq 看 JSON。

```bash
curl -s https://api.github.com/repos/ra1nyxin/ra1nyxin.github.io | jq ".stargazers_count"
```

## 小记录

curl 很适合做第一轮接口确认。复杂登录态、前端签名、WebSocket、浏览器指纹这些场景，直接上浏览器 DevTools 或专门代理工具会更省时间。
