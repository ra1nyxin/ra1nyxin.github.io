# Windows API 调用笔记：CertGetCertificateChain

CertGetCertificateChain 多见于证书库、证书链和信任验证场景，实际使用时通常围绕打开证书库、枚举证书、构建证书链、验证吊销状态或解析证书名称。常见落点包括 TLS、代码签名、企业根证书、S/MIME、驱动验证和安装程序。证书存在不等于可信，链状态、用途、时间、根证书和撤销信息都要一起看。

## 入口

```text
DLL: crypt32.dll; Header: wincrypt.h
```

```cpp
BOOL ok = CertGetCertificateChain(engine, cert, verifyTime, extraStore, &para, flags, nullptr, &chain);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CertGetCertificateChain
```

## 参数关注

`hChainEngine` 为 null 时使用默认链引擎。企业环境里可能需要指定自定义引擎或额外证书库。`pTime` 决定按当前时间还是历史时间验证，代码签名和时间戳场景尤其重要。

`CERT_CHAIN_PARA` 里可以指定用途、策略和附加约束。`dwFlags` 会影响缓存、撤销检查、网络访问和弱签名处理。记录时要写明是否允许联网查询 CRL/OCSP。

## 返回与释放

成功返回链上下文，使用后需要 CertFreeCertificateChain。链构建成功不代表链完全可信，必须继续查看 `TrustStatus`。

```cpp
DWORD status = chain->TrustStatus.dwErrorStatus;
```

## 复核点

复核时，将证书指纹、链元素、根证书、策略 OID、时间戳、撤销状态和文件来源放在一起。企业内网 CA、自签证书和交叉签名链要写明证书库来源。
