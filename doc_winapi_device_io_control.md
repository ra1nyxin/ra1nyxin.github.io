# Windows API 调用笔记：DeviceIoControl

DeviceIoControl 我会放在 进程线程、文件、内存、同步对象和调试状态的基础系统调用 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: kernel32.dll; Header: windows.h
```

```cpp
auto result = DeviceIoControl(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i DeviceIoControl
```

## 我会记录

```text
字段: handle, access mask, target object, return value, GetLastError
```

```text
复核: 先记录返回值和错误码，再决定是否继续查对象权限或系统事件
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
