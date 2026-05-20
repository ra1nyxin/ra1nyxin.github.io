# Windows API 调用笔记：NtMapViewOfSection

NtMapViewOfSection 我会放在 NT 对象、Section、事件、Mutant、目录对象和符号链接复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtMapViewOfSection(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtMapViewOfSection
```

## 记录字段

```text
NTSTATUS, object attributes, object name, desired access, handle, information class
```

## 复核点

```text
NT 对象名要按原始 NT 路径保存，转成 DOS 路径后会丢命名空间信息
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
