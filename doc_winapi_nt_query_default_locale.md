# Windows API 调用笔记：NtQueryDefaultLocale

NtQueryDefaultLocale 常用于 NT 系统状态、性能、时间和系统环境查询。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtQueryDefaultLocale(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtQueryDefaultLocale
```

## 记录字段

```text
system information class, buffer length, NTSTATUS, timestamp, counter value
```

## 复核点

```text
系统信息类要写编号和结构名，网上资料很多会随 Windows 版本漂移
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
