# Windows API 调用笔记：NCryptOpenStorageProvider

NCryptOpenStorageProvider 我会放在 KSP、密钥枚举和签名接口复核 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: ncrypt.dll; Header: ncrypt.h
```

```cpp
auto result = NCryptOpenStorageProvider(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ncrypt.dll | findstr /i NCryptOpenStorageProvider
```

## 我会记录

```text
字段: provider, key name, key spec, flags, security descriptor
```

```text
复核: 密钥名和 Provider 可能很敏感，报告里通常只留必要摘要
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
