# Windows API 调用笔记：EnumProcesses

EnumProcesses 常用于 进程、模块和内存计数器枚举。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: psapi.dll; Header: psapi.h
```

```cpp
auto result = EnumProcesses(...);
```

```powershell
dumpbin /exports C:\Windows\System32\psapi.dll | findstr /i EnumProcesses
```

## 记录字段

```text
字段: pid, module base, image path, working set, pagefile usage
```

```text
复核: PSAPI 结果适合做画像，权限不足时要记录失败 PID
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
