# Windows API 调用笔记：EnumerateSecurityPackagesW

EnumerateSecurityPackagesW 常用于 SSPI、Schannel、认证包和安全上下文调试。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: secur32.dll; Header: sspi.h / schannel.h
```

```cpp
auto result = EnumerateSecurityPackagesW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\secur32.dll | findstr /i EnumerateSecurityPackagesW
```

## 记录字段

```text
security package, credential use, context attributes, target SPN, status code, buffer sizes
```

## 复核点

```text
SSPI 调试要保存包名、SPN、上下文属性和 SEC_E 状态码，错误码比日志标题更可靠
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
