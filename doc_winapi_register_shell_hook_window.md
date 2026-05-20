# Windows API 调用笔记：RegisterShellHookWindow

RegisterShellHookWindow 常用于 窗口枚举、前台窗口归属和 UI 事件观察。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: user32.dll; Header: winuser.h
```

```cpp
auto result = RegisterShellHookWindow(...);
```

```powershell
dumpbin /exports C:\Windows\System32\user32.dll | findstr /i RegisterShellHookWindow
```

## 记录字段

```text
字段: HWND, class name, title, owner pid, visibility, event id
```

```text
复核: 窗口标题可能带隐私内容，记录时优先留进程归属和类别
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
