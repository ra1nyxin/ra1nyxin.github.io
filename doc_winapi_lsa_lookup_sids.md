# Windows API 调用笔记：LsaLookupSids

LsaLookupSids 我会放在 LSA Policy、账号权限和 SID/name 解析 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: advapi32.dll; Header: ntsecapi.h
```

```cpp
auto result = LsaLookupSids(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LsaLookupSids
```

## 我会记录

```text
字段: policy handle, SID, account right, NTSTATUS, lookup domain
```

```text
复核: LSA 返回 NTSTATUS，先转成 Win32 错误再写进笔记
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
