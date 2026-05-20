# Windows API 调用笔记：TdhGetEventInformation

TdhGetEventInformation 我会放在 ETW 元数据、Provider 和事件字段解析 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: tdh.dll; Header: tdh.h
```

```cpp
auto result = TdhGetEventInformation(...);
```

```powershell
dumpbin /exports C:\Windows\System32\tdh.dll | findstr /i TdhGetEventInformation
```

## 我会记录

```text
字段: provider GUID, event descriptor, property count, status, map info
```

```text
复核: TDH 结果适合解释 ETW 字段含义，最好和原始事件一起保存
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
