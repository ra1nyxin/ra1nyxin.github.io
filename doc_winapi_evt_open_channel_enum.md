# Windows API 调用笔记：EvtOpenChannelEnum

EvtOpenChannelEnum 我会放在 Windows Event Log 查询、订阅和渲染 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: wevtapi.dll; Header: winevt.h
```

```cpp
auto result = EvtOpenChannelEnum(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wevtapi.dll | findstr /i EvtOpenChannelEnum
```

## 我会记录

```text
字段: channel, query, event id, provider, render flags, bookmark
```

```text
复核: 事件查询要保存 XPath、Channel 和渲染模式，后面才能复现
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
