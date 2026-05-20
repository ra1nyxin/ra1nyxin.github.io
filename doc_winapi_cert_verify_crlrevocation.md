# Windows API 调用笔记：CertVerifyCRLRevocation

CertVerifyCRLRevocation 我会放在 证书库、编码对象、OID、CRL 和签名消息复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: crypt32.dll; Header: wincrypt.h
```

```cpp
auto result = CertVerifyCRLRevocation(...);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CertVerifyCRLRevocation
```

## 记录字段

```text
store name, encoding type, subject, issuer, thumbprint, chain status, last error
```

## 复核点

```text
证书相关记录要区分存储位置、链验证结果和用途，不能只写证书存在
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
