# Windows API 调用笔记：CertVerifyCertificateChainPolicy

CertVerifyCertificateChainPolicy 常用于 证书对象、证书链和 DPAPI 用户上下文验证。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: crypt32.dll; Header: wincrypt.h / dpapi.h
```

```cpp
auto result = CertVerifyCertificateChainPolicy(...);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CertVerifyCertificateChainPolicy
```

## 记录字段

```text
字段: store, subject, thumbprint, chain status, user context, error code
```

```text
复核: 涉及 DPAPI 时必须写明当前用户、机器上下文和保护描述
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
