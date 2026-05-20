# Windows API 调用笔记：WinVerifyTrust

WinVerifyTrust 我会放在 文件签名、证书链和发布者信任验证 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: wintrust.dll; Header: wintrust.h
```

```cpp
auto result = WinVerifyTrust(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wintrust.dll | findstr /i WinVerifyTrust
```

## 我会记录

```text
字段: file path, trust action, signer, chain status, HRESULT
```

```text
复核: 签名有效和发布者可信要分开写，别只记录一个成功返回值
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
