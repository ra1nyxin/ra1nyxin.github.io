# Windows API 调用笔记：WscGetSecurityProviderHealth

WscGetSecurityProviderHealth 我会放在 Windows Security Center Provider 健康状态确认 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: wscapi.dll; Header: wscapi.h
```

```cpp
auto result = WscGetSecurityProviderHealth(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wscapi.dll | findstr /i WscGetSecurityProviderHealth
```

## 我会记录

```text
字段: provider mask, health state, HRESULT, caller integrity
```

```text
复核: 结果适合做状态快照，后续还要和服务状态、事件日志一起看
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
