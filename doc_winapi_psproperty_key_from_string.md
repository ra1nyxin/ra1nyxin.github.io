# Windows API 调用笔记：PSPropertyKeyFromString

PSPropertyKeyFromString 我会放在 属性系统、文件元数据和 Shell Property Store 读取 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: ole32.dll / propsys.dll; Header: propsys.h / propkey.h
```

```cpp
auto result = PSPropertyKeyFromString(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ole32.dll | findstr /i PSPropertyKeyFromString
```

## 记录字段

```text
property key, canonical name, variant type, file path, HRESULT
```

## 复核点

```text
元数据读取要记录 PROPERTYKEY 和来源文件，显示文本会丢失类型信息
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
