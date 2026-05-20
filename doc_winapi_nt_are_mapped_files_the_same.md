# Windows API 调用笔记：NtAreMappedFilesTheSame

NtAreMappedFilesTheSame 我会放在 NT 内存、VAD、Section 和进程地址空间观察 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtAreMappedFilesTheSame(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtAreMappedFilesTheSame
```

## 记录字段

```text
process handle, base address, region size, memory information class, protect, NTSTATUS
```

## 复核点

```text
底层内存结果要和 VirtualQueryEx 对照，信息类不同会看到不同粒度
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
