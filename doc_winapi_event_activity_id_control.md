# Windows API 调用笔记：EventActivityIdControl

EventActivityIdControl 常用于 ETW Provider 注册、Trace Session 控制和事件消费。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: advapi32.dll; Header: evntprov.h / evntrace.h / traceloggingprovider.h
```

```cpp
auto result = EventActivityIdControl(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i EventActivityIdControl
```

## 记录字段

```text
字段: provider GUID, session name, trace handle, enable flags, activity id
```

```text
复核: ETW 调试要记录 session name 和 provider GUID，否则复盘会很难对齐
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
