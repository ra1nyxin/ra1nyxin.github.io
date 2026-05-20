# Windows API 调用笔记：NtDebugActiveProcess

NtDebugActiveProcess 经常落在NTAPI、RTL 和 Loader 低层接口这类位置。它离系统调用、PEB/TEB、对象管理器、Loader 和原生结构体更近。记录时最好写清结构体来源、系统版本和符号来源，避免把某个版本的字段当成通用事实。

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

## 参数与上下文

NTAPI 参数经常包含 UNICODE_STRING、OBJECT_ATTRIBUTES、CLIENT_ID、IO_STATUS_BLOCK、SECTION、TOKEN、KEY、FILE 信息类等结构。记录时要保存信息类、访问掩码、对象名、RootDirectory、Attributes 和 NTSTATUS。

上下文比单次调用更重要。记录对象来源、访问权限、返回状态和后续 API，后面复盘时才不容易断线。

## 返回与错误

主要返回 NTSTATUS。需要保留原始十六进制状态，可再转换成 Win32 错误辅助阅读。输出缓冲区和 ReturnLength 是很多查询接口的关键字段。

```cpp
NTSTATUS status = result;
```

## 复核点

复查时，把 ntdll 导出、系统版本、结构体定义、调用身份、对象命名空间和 Win32 等价接口放在一起对照。低层接口差异大，跨版本结论要保守。
