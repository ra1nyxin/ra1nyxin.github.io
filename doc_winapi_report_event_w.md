# Windows API 调用笔记：ReportEventW

ReportEventW 我会放在 传统 EventLog 读取和事件写入验证 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: advapi32.dll; Header: winbase.h
```

```cpp
auto result = ReportEventW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i ReportEventW
```

## 我会记录

```text
字段: log name, record number, event id, source, event type
```

```text
复核: 老接口常见于旧服务，现代系统里要和 Wevtapi 结果对照
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
