# Windows API 调用笔记：GetPackageFullName

GetPackageFullName 常用于 App package 身份和桌面桥应用边界确认。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: kernel32.dll; Header: appmodel.h
```

```cpp
auto result = GetPackageFullName(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i GetPackageFullName
```

## 记录字段

```text
字段: package full name, package id, buffer length, error code
```

```text
复核: 无包身份返回错误也有价值，说明当前进程运行模型
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
