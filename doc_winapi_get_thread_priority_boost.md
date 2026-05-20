# Windows API 调用笔记：GetThreadPriorityBoost

GetThreadPriorityBoost 常用于 Job 限制、进程亲和性、优先级和资源用量复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: kernel32.dll; Header: processthreadsapi.h / jobapi2.h
```

```cpp
auto result = GetThreadPriorityBoost(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i GetThreadPriorityBoost
```

## 记录字段

```text
process handle, job handle, limit flags, affinity mask, priority class, last error
```

## 复核点

```text
资源限制问题要同时看 Job、优先级和亲和性，单个指标经常解释不完整
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
