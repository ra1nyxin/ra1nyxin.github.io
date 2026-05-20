# Windows API 调用笔记：EvtNext

EvtNext 常用于 Windows Event Log 查询、订阅和渲染。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: wevtapi.dll; Header: winevt.h
```

```cpp
auto result = EvtNext(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wevtapi.dll | findstr /i EvtNext
```

## 记录字段

```text
字段: channel, query, event id, provider, render flags, bookmark
```

```text
复核: 事件查询要保存 XPath、Channel 和渲染模式，后面才能复现
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
