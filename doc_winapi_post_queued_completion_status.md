# Windows API 调用笔记：PostQueuedCompletionStatus

PostQueuedCompletionStatus 我会放在 管道、异步 IO、完成端口和设备交互排查 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: kernel32.dll; Header: ioapiset.h / namedpipeapi.h
```

```cpp
auto result = PostQueuedCompletionStatus(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i PostQueuedCompletionStatus
```

## 记录字段

```text
handle, overlapped pointer, bytes transferred, pipe mode, completion key, last error
```

## 复核点

```text
异步 IO 要记录 pending 状态和完成通知来源，不然很难解释为什么请求看似没有返回
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
