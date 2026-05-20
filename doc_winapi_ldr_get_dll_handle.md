# Windows API 调用笔记：LdrGetDllHandle

LdrGetDllHandle 我会放在 LDR 模块加载、DLL 搜索路径和导出解析排查 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = LdrGetDllHandle(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i LdrGetDllHandle
```

## 记录字段

```text
module handle, DLL path, base address, flags, export name, NTSTATUS
```

## 复核点

```text
LDR 相关结果要和 PEB 模块链表、Win32 LoadLibrary 结果一起比对
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
