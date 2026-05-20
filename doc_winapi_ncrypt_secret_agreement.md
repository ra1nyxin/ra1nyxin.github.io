# Windows API 调用笔记：NCryptSecretAgreement

NCryptSecretAgreement 我会放在 CNG Key Storage Provider、密钥属性和密钥保护边界确认 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: ncrypt.dll; Header: ncrypt.h
```

```cpp
auto result = NCryptSecretAgreement(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ncrypt.dll | findstr /i NCryptSecretAgreement
```

## 记录字段

```text
provider, key name, property name, algorithm group, export policy, security descriptor
```

## 复核点

```text
KSP 枚举结果要记录 Provider 和属性名，密钥材料本身不要写进普通笔记
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
