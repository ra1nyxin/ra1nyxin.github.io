# Windows API 调用笔记：NtQuerySystemInformation

NtQuerySystemInformation 我会放在 NT 层信息查询、对象状态核对和版本差异排查 时查。NTAPI 这一层我会额外写系统版本和结构体来源，尤其是 PHNT、符号文件或自己逆出来的字段。

## 入口

```text
DLL: ntdll.dll; Header: winternl.h / phnt headers
```

```cpp
auto result = NtQuerySystemInformation(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ntdll.dll | findstr /i NtQuerySystemInformation
```

## 我会记录

```text
字段: NTSTATUS, information class, buffer size, handle, object name, Windows build
```

```text
复核: 结构体字段和 information class 会随版本变化，先写系统版本和符号来源
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
