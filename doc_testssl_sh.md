# testssl.sh 常用用法

testssl.sh 适合 TLS 配置检查。常用参数：目标地址，`--fast` 快速检查，`--jsonfile` 输出 JSON。

```bash
testssl.sh https://example.com
```

```bash
testssl.sh --fast https://example.com
```

```bash
testssl.sh --jsonfile tls.json https://example.com
```

```bash
testssl.sh -p -U https://example.com
```

小记录：TLS 排查先看协议版本、证书链、弱套件和过期时间。报告适合和 OpenSSL 手工结果互相确认。
