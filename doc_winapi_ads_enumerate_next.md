# Windows API 调用笔记：ADsEnumerateNext

ADsEnumerateNext 常用于 ADSI 对象绑定、目录对象属性和组关系复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: activeds.dll; Header: activeds.h
```

```cpp
auto result = ADsEnumerateNext(...);
```

```powershell
dumpbin /exports C:\Windows\System32\activeds.dll | findstr /i ADsEnumerateNext
```

## 记录字段

```text
ADsPath, object class, property name, HRESULT, variant type
```

## 复核点

```text
ADSI 适合做管理型查询，记录 ADsPath 和属性名比记录显示名更稳定
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
