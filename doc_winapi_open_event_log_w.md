# Windows API 调用笔记：OpenEventLogW

OpenEventLogW 常用于 传统 EventLog 读取和事件写入验证。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: advapi32.dll; Header: winbase.h
```

```cpp
auto result = OpenEventLogW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i OpenEventLogW
```

## 记录字段

```text
字段: log name, record number, event id, source, event type
```

```text
复核: 老接口常见于旧服务，现代系统里要和 Wevtapi 结果对照
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
