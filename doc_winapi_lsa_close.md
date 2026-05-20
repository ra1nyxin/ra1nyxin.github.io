# Windows API 调用笔记：LsaClose

LsaClose 常用于 LSA Policy、账号权限和 SID/name 解析。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: advapi32.dll; Header: ntsecapi.h
```

```cpp
auto result = LsaClose(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LsaClose
```

## 记录字段

```text
字段: policy handle, SID, account right, NTSTATUS, lookup domain
```

```text
复核: LSA 返回 NTSTATUS，先转成 Win32 错误再写进笔记
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
