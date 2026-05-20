# Windows API 调用笔记：NtDebugActiveProcess

NtDebugActiveProcess 常用于 NT 进程、线程、Token 和调试对象的底层状态查询。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtDebugActiveProcess(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtDebugActiveProcess
```

## 记录字段

```text
NTSTATUS, process handle, thread handle, client id, information class, object attributes
```

## 复核点

```text
NTAPI 调试要写明信息类编号和结构体版本，跨版本复现时最容易出差异
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
