# Windows API 调用笔记：NtNotifyChangeKey

NtNotifyChangeKey 多见于 NTAPI、RTL 和 Loader 低层接口场景。这类接口更接近系统调用、PEB/TEB、对象管理器、Loader 和原生结构体。记录里要写清结构体来源、系统版本和符号来源，避免把某个版本的字段当成通用事实。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtNotifyChangeKey(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtNotifyChangeKey
```

## 参数与上下文

NTAPI 参数经常包含 UNICODE_STRING、OBJECT_ATTRIBUTES、CLIENT_ID、IO_STATUS_BLOCK、SECTION、TOKEN、KEY、FILE 信息类等结构。记录时要保存信息类、访问掩码、对象名、RootDirectory、Attributes 和 NTSTATUS。

这是状态修改类接口，重点记录调用前状态、请求的新状态、调用身份、目标对象和返回码。审计时要把前置查询、修改调用和后续验证放在同一条链路里。

## 返回与错误

主要返回 NTSTATUS。需要保留原始十六进制状态，可再转换成 Win32 错误辅助阅读。输出缓冲区和 ReturnLength 是很多查询接口的关键字段。

```cpp
NTSTATUS status = result;
```

## 复核点

整理证据时，把 ntdll 导出、系统版本、结构体定义、调用身份、对象命名空间和 Win32 等价接口放在一起对照。低层接口差异大，跨版本结论要保守。
