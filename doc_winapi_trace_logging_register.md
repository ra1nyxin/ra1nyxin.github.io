# Windows API 调用笔记：TraceLoggingRegister

TraceLoggingRegister 我会放在 ETW Provider 注册、Trace Session 控制和事件消费 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: advapi32.dll; Header: evntprov.h / evntrace.h / traceloggingprovider.h
```

```cpp
auto result = TraceLoggingRegister(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i TraceLoggingRegister
```

## 我会记录

```text
字段: provider GUID, session name, trace handle, enable flags, activity id
```

```text
复核: ETW 调试要记录 session name 和 provider GUID，否则复盘会很难对齐
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
