# Windows API 调用笔记：PowerEnumerate

PowerEnumerate 我会放在 电源策略、休眠状态和系统电源信息确认 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: powrprof.dll; Header: powrprof.h
```

```cpp
auto result = PowerEnumerate(...);
```

```powershell
dumpbin /exports C:\Windows\System32\powrprof.dll | findstr /i PowerEnumerate
```

## 我会记录

```text
字段: power information level, AC state, battery flag, status, buffer length
```

```text
复核: 电源状态会影响采集和长任务，做现场记录时很实用
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
