# Windows API 调用笔记：TdhFormatProperty

TdhFormatProperty 常用于 ETW 事件属性、Map 信息和 Provider Manifest 元数据解析。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: tdh.dll; Header: tdh.h
```

```cpp
auto result = TdhFormatProperty(...);
```

```powershell
dumpbin /exports C:\Windows\System32\tdh.dll | findstr /i TdhFormatProperty
```

## 记录字段

```text
provider GUID, event descriptor, property name, in type, out type, map name
```

## 复核点

```text
TDH 解析适合把原始 ETW 字段转成人能读的结构，原始事件也要保留
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
