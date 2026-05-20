# Windows API 调用笔记：NtQueryFullAttributesFile

NtQueryFullAttributesFile 常用于 NT 文件、目录、EA、重命名和链接操作复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtQueryFullAttributesFile(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtQueryFullAttributesFile
```

## 记录字段

```text
file handle, object attributes, IO status block, information class, NT path
```

## 复核点

```text
NT 文件接口绕过了很多 Win32 路径包装，原始 ObjectAttributes 要留在笔记里
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
