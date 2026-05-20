# Windows API 调用笔记：ReplaceFileW

ReplaceFileW 我会放在 文件操作、路径规范化、临时文件和链接关系确认 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: kernel32.dll; Header: fileapi.h / winbase.h
```

```cpp
auto result = ReplaceFileW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i ReplaceFileW
```

## 记录字段

```text
source path, target path, attributes, reparse tag, file id, share mode, last error
```

## 复核点

```text
路径要同时保存原始输入和解析后的最终路径，避免符号链接、短路径和重解析点造成误判
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
