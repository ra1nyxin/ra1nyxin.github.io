# Windows API 调用笔记：CryptQueryObject

CryptQueryObject 我会放在 证书对象、证书链和 DPAPI 用户上下文验证 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: crypt32.dll; Header: wincrypt.h / dpapi.h
```

```cpp
auto result = CryptQueryObject(...);
```

```powershell
dumpbin /exports C:\Windows\System32\crypt32.dll | findstr /i CryptQueryObject
```

## 我会记录

```text
字段: store, subject, thumbprint, chain status, user context, error code
```

```text
复核: 涉及 DPAPI 时必须写明当前用户、机器上下文和保护描述
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
