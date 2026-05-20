# Windows API 调用笔记：GetProcessImageFileNameW

GetProcessImageFileNameW 我会放在 进程、模块和内存计数器枚举 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: psapi.dll; Header: psapi.h
```

```cpp
auto result = GetProcessImageFileNameW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\psapi.dll | findstr /i GetProcessImageFileNameW
```

## 我会记录

```text
字段: pid, module base, image path, working set, pagefile usage
```

```text
复核: PSAPI 结果适合做画像，权限不足时要记录失败 PID
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
