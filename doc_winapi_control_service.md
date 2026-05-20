# Windows API 调用笔记：ControlService

ControlService 常用于 COM 初始化、安全上下文和对象创建链路确认。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: ole32.dll; Header: objbase.h / combaseapi.h
```

```cpp
auto result = ControlService(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ole32.dll | findstr /i ControlService
```

## 记录字段

```text
字段: apartment model, CLSID, IID, HRESULT, authentication level
```

```text
复核: COM 调用失败先看 CoInitializeSecurity 和代理安全设置
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
