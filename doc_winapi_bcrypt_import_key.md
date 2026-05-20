# Windows API 调用笔记：BCryptImportKey

BCryptImportKey 常用于 CNG 原语、算法属性、对称加密和密钥派生复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: bcrypt.dll; Header: bcrypt.h
```

```cpp
auto result = BCryptImportKey(...);
```

```powershell
dumpbin /exports C:\Windows\System32\bcrypt.dll | findstr /i BCryptImportKey
```

## 记录字段

```text
algorithm id, chaining mode, key length, IV length, NTSTATUS, property name
```

## 复核点

```text
算法接口要把模式、IV、认证标签和输入长度写清楚，避免只留下算法名
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
