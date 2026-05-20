# Windows API 调用笔记：EnumDeviceDrivers

EnumDeviceDrivers 我会放在 模块、设备驱动、进程快照和映像路径交叉验证 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: psapi.dll / kernel32.dll; Header: psapi.h / tlhelp32.h
```

```cpp
auto result = EnumDeviceDrivers(...);
```

```powershell
dumpbin /exports C:\Windows\System32\psapi.dll | findstr /i EnumDeviceDrivers
```

## 记录字段

```text
pid, module base, module size, driver base, image path, snapshot flags
```

## 复核点

```text
模块枚举要注意 32/64 位差异，必要时用多套接口互相印证
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
