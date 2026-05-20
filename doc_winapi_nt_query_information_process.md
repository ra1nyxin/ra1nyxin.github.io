# Windows API 调用笔记：NtQueryInformationProcess

NtQueryInformationProcess 常用于 NT 层信息查询、对象状态核对和版本差异排查。NTAPI 这一层需要额外记录系统版本和结构体来源，尤其是 PHNT、符号文件或逆向确认的字段。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtQueryInformationProcess(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtQueryInformationProcess
```

## 记录字段

```text
字段: NTSTATUS, information class, buffer size, handle, object name, Windows build
```

```text
复核: 结构体字段和 information class 会随版本变化，先写系统版本和符号来源
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
