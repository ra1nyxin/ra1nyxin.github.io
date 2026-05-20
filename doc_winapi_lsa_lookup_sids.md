# Windows API 调用笔记：LsaLookupSids

LsaLookupSids 用于把一组 SID 批量解析为名称和域信息。相比单个 LookupAccountSidW，它更适合处理 ACL、Token 组列表和大量事件日志中的 SID。

## 入口

```text
DLL: advapi32.dll; Header: ntsecapi.h
```

```cpp
NTSTATUS st = LsaLookupSids(policy, sidCount, sidArray, &referencedDomains, &names);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LsaLookupSids
```

## 参数关注

`PolicyHandle` 通常来自 LsaOpenPolicy。`Sids` 是 SID 指针数组，记录时要先转换成字符串形式。返回的 `ReferencedDomains` 和 `Names` 需要一起解析，名称里的域索引指向域列表。

## 返回与错误

可能返回部分成功状态，例如部分 SID 无法解析。不要因为一个 SID 解析失败就丢弃整批结果。返回缓冲区需要 LsaFreeMemory。

```cpp
ULONG err = LsaNtStatusToWinError(st);
```

## 复核点

记录 SID 数量、每个 SID 字符串、解析出的名称、域、SID_NAME_USE 和未解析项。跨域、离线主机、删除账号、服务 SID 和 AppContainer SID 都要保留原始 SID。
