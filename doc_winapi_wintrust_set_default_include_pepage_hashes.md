# Windows API 调用笔记：WintrustSetDefaultIncludePEPageHashes

WintrustSetDefaultIncludePEPageHashes 常用于 Authenticode、Catalog、驱动签名和文件信任状态复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: wintrust.dll; Header: wintrust.h / softpub.h
```

```cpp
auto result = WintrustSetDefaultIncludePEPageHashes(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wintrust.dll | findstr /i WintrustSetDefaultIncludePEPageHashes
```

## 记录字段

```text
file path, catalog path, policy GUID, signer, timestamp, trust result
```

## 复核点

```text
签名验证要记录策略 GUID、时间戳和 catalog 来源，单个成功返回值信息不够
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
