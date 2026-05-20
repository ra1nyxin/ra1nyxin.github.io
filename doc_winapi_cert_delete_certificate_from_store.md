# Windows API 调用笔记：CertDeleteCertificateFromStore

CertDeleteCertificateFromStore 多见于证书库、证书链和信任验证场景，实际使用时通常围绕打开证书库、枚举证书、构建证书链、验证吊销状态或解析证书名称。常见落点包括 TLS、代码签名、企业根证书、S/MIME、驱动验证和安装程序。证书存在不等于可信，链状态、用途、时间、根证书和撤销信息都要一起看。

## 入口

```text
DLL: crypt32.dll; Header: wincrypt.h
```

```cpp
auto result = CertDeleteCertificateFromStore(...);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CertDeleteCertificateFromStore
```

## 参数与上下文

证书接口要记录 store scope、store name、encoding type、subject、issuer、thumbprint、EKU、验证时间、chain flags 和 revocation flags。名称转换接口要保存输入格式和输出长度，证书上下文复制与释放也要成对记录。

这是状态修改类接口，重点记录调用前状态、请求的新状态、调用身份、目标对象和返回码。审计时要把前置查询、修改调用和后续验证放在同一条链路里。

## 返回与错误

Cert* 接口通常返回 BOOL、句柄或上下文指针，并通过 GetLastError 或链状态结构补充原因。链构建成功只说明有链结果，是否可信要继续看 TrustStatus。

```cpp
NTSTATUS status = result;
```

## 复核点

整理证据时，把证书指纹、链元素、根证书、策略 OID、时间戳、撤销状态和文件来源放在一起。企业内网 CA、自签证书和交叉签名链要写明证书库来源。
