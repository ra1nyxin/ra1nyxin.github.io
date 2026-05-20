# Windows API 调用笔记：MiniDumpReadDumpStream

MiniDumpReadDumpStream 我会放在 符号加载、栈回溯、MiniDump 和 PE 辅助分析 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: dbghelp.dll; Header: dbghelp.h
```

```cpp
auto result = MiniDumpReadDumpStream(...);
```

```powershell
dumpbin /exports C:\Windows\System32\dbghelp.dll | findstr /i MiniDumpReadDumpStream
```

## 记录字段

```text
process handle, symbol path, module base, address, dump type, error code
```

## 复核点

```text
符号分析要保存 symbol path 和模块基址，否则同样地址下次可能解析成别的结果
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
