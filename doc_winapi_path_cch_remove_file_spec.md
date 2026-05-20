# Windows API 调用笔记：PathCchRemoveFileSpec

PathCchRemoveFileSpec 常用于 现代路径规范化、路径组合和长路径处理。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: pathcch.dll; Header: pathcch.h
```

```cpp
auto result = PathCchRemoveFileSpec(...);
```

```powershell
dumpbin /exports C:\Windows\System32\pathcch.dll | findstr /i PathCchRemoveFileSpec
```

## 记录字段

```text
input path, output path, flags, HRESULT, buffer length
```

## 复核点

```text
PathCch 系列适合替代老 Path* 函数，仍然要记录规范化前后的差异
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
