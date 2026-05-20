# Windows API 调用笔记：SymUnloadModule64

SymUnloadModule64 常用于 符号加载、栈回溯、MiniDump 和 PE 辅助分析。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: dbghelp.dll; Header: dbghelp.h
```

```cpp
auto result = SymUnloadModule64(...);
```

```powershell
dumpbin /exports C:\Windows\System32\dbghelp.dll | findstr /i SymUnloadModule64
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
