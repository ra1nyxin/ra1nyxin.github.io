# Windows API 调用笔记：ContinueDebugEvent

ContinueDebugEvent 我会放在 COM 初始化、安全上下文和对象创建链路确认 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: ole32.dll; Header: objbase.h / combaseapi.h
```

```cpp
auto result = ContinueDebugEvent(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ole32.dll | findstr /i ContinueDebugEvent
```

## 我会记录

```text
字段: apartment model, CLSID, IID, HRESULT, authentication level
```

```text
复核: COM 调用失败先看 CoInitializeSecurity 和代理安全设置
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
