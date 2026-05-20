# Windows API 调用笔记：UnregisterPowerSettingNotification

UnregisterPowerSettingNotification 我会放在 原始输入、显示器、电源广播和会话变化观察 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: user32.dll; Header: winuser.h
```

```cpp
auto result = UnregisterPowerSettingNotification(...);
```

```powershell
dumpbin /exports C:\Windows\System32\user32.dll | findstr /i UnregisterPowerSettingNotification
```

## 记录字段

```text
device handle, raw input type, monitor handle, broadcast setting, message id
```

## 复核点

```text
原始输入结果要写设备类型和目标窗口，避免把键鼠、HID 和远程会话混在一起
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
