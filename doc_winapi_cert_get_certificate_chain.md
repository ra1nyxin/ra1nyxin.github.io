# Windows API 调用笔记：CertGetCertificateChain

CertGetCertificateChain 用于构建并验证证书链。它常见于 TLS、代码签名、企业证书、智能卡、S/MIME 和内部 PKI 排查。证书存在不代表链可信，链状态、用途、时间和撤销信息都要看。

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

记录主题、颁发者、指纹、用途、根证书、链元素数量、错误状态、信息状态、验证时间和撤销策略。对内网 CA、过期证书、自签证书和交叉签名链，要保存证书库来源和机器策略。
