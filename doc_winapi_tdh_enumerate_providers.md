# Windows API 调用笔记：TdhEnumerateProviders

TdhEnumerateProviders 常用于 ETW 元数据、Provider 和事件字段解析。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: tdh.dll; Header: tdh.h
```

```cpp
auto result = TdhEnumerateProviders(...);
```

```powershell
dumpbin /exports C:\Windows\System32\tdh.dll | findstr /i TdhEnumerateProviders
```

## 记录字段

```text
字段: provider GUID, event descriptor, property count, status, map info
```

```text
复核: TDH 结果适合解释 ETW 字段含义，最好和原始事件一起保存
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
