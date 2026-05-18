# OpenSSL 常用用法

这篇记录 OpenSSL 的日常命令。证书查看、TLS 握手、哈希、编码、随机数和简单密钥操作都能用它快速处理。

## 查看版本

确认当前 OpenSSL 版本。

```bash
openssl version -a
```

## 查看证书文件

查看 PEM 证书内容。

```bash
openssl x509 -in cert.pem -noout -text
```

查看证书主体和颁发者。

```bash
openssl x509 -in cert.pem -noout -subject -issuer
```

查看证书有效期。

```bash
openssl x509 -in cert.pem -noout -dates
```

查看证书指纹。

```bash
openssl x509 -in cert.pem -noout -fingerprint -sha256
```

## 检查远程 TLS

连接远程 HTTPS 服务。

```bash
openssl s_client -connect example.com:443
```

带 SNI 连接，排查多域名证书时要加。

```bash
openssl s_client -connect example.com:443 -servername example.com
```

显示证书链。

```bash
openssl s_client -connect example.com:443 -servername example.com -showcerts
```

只看协商出来的协议和加密套件。

```bash
openssl s_client -connect example.com:443 -servername example.com </dev/null 2>/dev/null | openssl x509 -noout -subject -issuer -dates
```

## 生成密钥和 CSR

生成 RSA 私钥。

```bash
openssl genrsa -out server.key 2048
```

用私钥生成 CSR。

```bash
openssl req -new -key server.key -out server.csr
```

查看 CSR 内容。

```bash
openssl req -in server.csr -noout -text
```

生成自签证书。

```bash
openssl req -x509 -newkey rsa:2048 -keyout server.key -out server.crt -days 365 -nodes
```

## 哈希和编码

计算文件 SHA256。

```bash
openssl dgst -sha256 file.txt
```

Base64 编码文件。

```bash
openssl base64 -in file.bin -out file.b64
```

Base64 解码文件。

```bash
openssl base64 -d -in file.b64 -out file.bin
```

生成随机十六进制字符串。

```bash
openssl rand -hex 32
```

## 格式转换

PEM 转 DER。

```bash
openssl x509 -in cert.pem -outform der -out cert.der
```

DER 转 PEM。

```bash
openssl x509 -inform der -in cert.der -out cert.pem
```

PFX 转 PEM。

```bash
openssl pkcs12 -in cert.pfx -out cert.pem -nodes
```

## 小记录

TLS 排查时要同时看域名、SNI、证书链、过期时间和中间证书。很多线上证书问题表面上像证书错了，实际会落到负载均衡、反向代理或中间证书没有发完整。
