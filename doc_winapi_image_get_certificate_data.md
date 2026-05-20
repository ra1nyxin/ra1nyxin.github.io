# Windows API 调用笔记：ImageGetCertificateData

ImageGetCertificateData 我会放在 PE 头、校验和、证书表和映像目录检查 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: imagehlp.dll; Header: imagehlp.h
```

```cpp
auto result = ImageGetCertificateData(...);
```

```powershell
dumpbin /exports C:\Windows\System32\imagehlp.dll | findstr /i ImageGetCertificateData
```

## 记录字段

```text
image path, checksum, directory index, certificate index, mapped base
```

## 复核点

```text
PE 辅助接口适合快速定位结构，复杂样本仍要用专门解析器复核
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
