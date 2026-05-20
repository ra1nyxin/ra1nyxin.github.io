# Windows API 调用笔记：VerFindFileW

VerFindFileW 常用于 文件版本、产品名、公司名和资源字段核对。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: version.dll; Header: winver.h
```

```cpp
auto result = VerFindFileW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\version.dll | findstr /i VerFindFileW
```

## 记录字段

```text
file path, fixed version, product version, translation, string key, last error
```

## 复核点

```text
版本资源适合做文件画像，签名、哈希和文件路径也要一起保存
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
