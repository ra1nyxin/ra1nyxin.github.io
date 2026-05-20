# Windows API 调用笔记：GetCurrentPackageFullName

GetCurrentPackageFullName 我会放在 App package 身份和桌面桥应用边界确认 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: kernel32.dll; Header: appmodel.h
```

```cpp
auto result = GetCurrentPackageFullName(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i GetCurrentPackageFullName
```

## 我会记录

```text
字段: package full name, package id, buffer length, error code
```

```text
复核: 无包身份返回错误也有价值，说明当前进程运行模型
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
