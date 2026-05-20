# Windows API 调用笔记：NCryptSignHash

NCryptSignHash 常用于 KSP、密钥枚举和签名接口复核。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: ncrypt.dll; Header: ncrypt.h
```

```cpp
auto result = NCryptSignHash(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ncrypt.dll | findstr /i NCryptSignHash
```

## 记录字段

```text
字段: provider, key name, key spec, flags, security descriptor
```

```text
复核: 密钥名和 Provider 可能很敏感，报告里通常只留必要摘要
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
