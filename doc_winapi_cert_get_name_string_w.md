# Windows API 调用笔记：CertGetNameStringW

CertGetNameStringW 常出现在证书库、证书链和信任验证场景，主要处理打开证书库、枚举证书、构建证书链、验证吊销状态或解析证书名称。常见落点包括 TLS、代码签名、企业根证书、S/MIME、驱动验证和安装程序。证书存在不等于可信，链状态、用途、时间、根证书和撤销信息都要一起看。

## 入口

```text
DLL: crypt32.dll; Header: wincrypt.h
```

```cpp
auto result = CertGetNameStringW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CertGetNameStringW
```

## 参数与上下文

证书接口要记录 store scope、store name、encoding type、subject、issuer、thumbprint、EKU、验证时间、chain flags 和 revocation flags。名称转换接口要保存输入格式和输出长度，证书上下文复制与释放也要成对记录。

这类查询接口要把目标对象、信息类别、输入输出长度、返回结构和状态码写完整。第一次因为缓冲区不足返回，通常只是探测长度，最终结论以后续读取结果为准。

## 返回与错误

Cert* 接口通常返回 BOOL、句柄或上下文指针，并通过 GetLastError 或链状态结构补充原因。链构建成功只说明有链结果，是否可信要继续看 TrustStatus。

```cpp
NTSTATUS status = result;
```

## 复核点

最后核对时，把证书指纹、链元素、根证书、策略 OID、时间戳、撤销状态和文件来源放在一起。企业内网 CA、自签证书和交叉签名链要写明证书库来源。
