# Windows API 调用笔记：CallNtPowerInformation

CallNtPowerInformation 常用于 电源策略、休眠状态和系统电源信息确认。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: powrprof.dll; Header: powrprof.h
```

```cpp
auto result = CallNtPowerInformation(...);
```

```powershell
dumpbin /exports C:\Windows\System32\powrprof.dll | findstr /i CallNtPowerInformation
```

## 记录字段

```text
字段: power information level, AC state, battery flag, status, buffer length
```

```text
复核: 电源状态会影响采集和长任务，做现场记录时很实用
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
