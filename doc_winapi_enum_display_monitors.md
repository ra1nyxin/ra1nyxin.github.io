# Windows API 调用笔记：EnumDisplayMonitors

EnumDisplayMonitors 我会放在 窗口枚举、前台窗口归属和 UI 事件观察 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: user32.dll; Header: winuser.h
```

```cpp
auto result = EnumDisplayMonitors(...);
```

```powershell
dumpbin /exports C:\Windows\System32\user32.dll | findstr /i EnumDisplayMonitors
```

## 我会记录

```text
字段: HWND, class name, title, owner pid, visibility, event id
```

```text
复核: 窗口标题可能带隐私内容，记录时优先留进程归属和类别
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
