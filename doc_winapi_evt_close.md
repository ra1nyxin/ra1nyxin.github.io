# Windows API 调用笔记：EvtClose

EvtClose 常用于 事件发布者元数据、Manifest 和事件消息格式化。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: eventlog.dll / advapi32.dll; Header: winevt.h / evntcons.h
```

```cpp
auto result = EvtClose(...);
```

```powershell
dumpbin /exports C:\Windows\System32\eventlog.dll | findstr /i EvtClose
```

## 记录字段

```text
publisher id, metadata handle, message id, locale, formatted message
```

## 复核点

```text
事件消息格式化要保存 provider 和 locale，不同语言包下文本会变化
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
