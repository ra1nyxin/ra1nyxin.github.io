# OpenSSL 使用笔记

OpenSSL 是处理证书、TLS 握手、哈希、编码和密钥格式时最顺手的命令行工具。它的参数很多，但日常排障其实集中在几件事：看证书内容、确认远端 TLS 链路、生成 CSR、转换格式、算摘要和生成随机值。

先确认版本。OpenSSL 1.1.1 和 3.x 在算法、provider、默认安全级别上有差异，同一条命令在不同机器上表现可能不一样。

```bash
openssl version -a
```

查看 PEM 证书内容时，`-noout -text` 是最常用组合。排线上证书问题时重点看 Subject、Issuer、SAN、有效期、Key Usage、Extended Key Usage 和签名算法。

```bash
openssl x509 -in cert.pem -noout -text
openssl x509 -in cert.pem -noout -subject -issuer -dates
openssl x509 -in cert.pem -noout -ext subjectAltName
openssl x509 -in cert.pem -noout -fingerprint -sha256
```

远端 TLS 检查一定要带 SNI。很多负载均衡和反向代理按 SNI 选择证书，不带 `-servername` 看到的可能是默认证书。

```bash
openssl s_client -connect example.com:443 -servername example.com
```

只想看远端发回来的证书链，可以加 `-showcerts`。输出里第一张通常是站点证书，后面是中间证书。链不完整时，浏览器可能靠缓存补齐，但某些客户端会失败。

```bash
openssl s_client -connect example.com:443 -servername example.com -showcerts
```

把远端证书直接接到 `x509` 看摘要，适合脚本里快速确认过期时间。

```bash
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null \
  | openssl x509 -noout -subject -issuer -dates -fingerprint -sha256
```

指定协议版本可以排查兼容性。老客户端连不上时，先确认服务端是否禁用了旧协议；新客户端失败时，也可能是中间设备不支持某些 TLS 行为。

```bash
openssl s_client -connect example.com:443 -servername example.com -tls1_2
openssl s_client -connect example.com:443 -servername example.com -tls1_3
```

生成私钥和 CSR 是证书申请的基础流程。生产私钥要保护权限，不要通过聊天工具或工单明文传递。

```bash
openssl genrsa -out server.key 2048
openssl req -new -key server.key -out server.csr
openssl req -in server.csr -noout -text
```

如果需要非交互生成 CSR，可以用 `-subj`。SAN 扩展更推荐写配置文件，避免只填 CN 造成现代客户端校验失败。

```bash
openssl req -new -key server.key -out server.csr \
  -subj "/C=JP/ST=Tokyo/L=Tokyo/O=Example/CN=example.com"
```

自签证书适合本地开发、临时实验和内网验证，不应该直接当公网生产证书。

```bash
openssl req -x509 -newkey rsa:2048 \
  -keyout server.key -out server.crt \
  -days 365 -nodes \
  -subj "/CN=localhost"
```

格式转换经常遇到。PEM 是文本，DER 是二进制，PFX/P12 常包含证书和私钥。带 `-nodes` 导出时私钥不加密，落盘后要注意权限。

```bash
openssl x509 -in cert.pem -outform der -out cert.der
openssl x509 -inform der -in cert.der -out cert.pem
openssl pkcs12 -in cert.pfx -out cert.pem -nodes
```

哈希、HMAC、Base64 和随机数也常用。

```bash
openssl dgst -sha256 file.txt
openssl dgst -sha256 -hmac 'secret' file.txt
openssl base64 -in file.bin -out file.b64
openssl base64 -d -in file.b64 -out file.bin
openssl rand -hex 32
```

检查私钥和证书是否匹配，可以比较公钥摘要。不要只靠文件名判断。

```bash
openssl x509 -in server.crt -noout -pubkey | openssl sha256
openssl pkey -in server.key -pubout | openssl sha256
```

TLS 排障时我一般按这个顺序看：域名是否正确，SNI 是否带上，证书是否过期，SAN 是否覆盖域名，证书链是否完整，协议和 cipher 是否兼容，最后才看客户端信任库。很多“证书错误”其实是反向代理发错证书或中间证书没配完整。
