# Windows API 调用笔记：RegisterWindowMessageW

RegisterWindowMessageW 放到窗口、桌面、输入、剪贴板、GDI 和 DWM场景里看并不罕见。这类调用常用来界面自动化、窗口枚举、剪贴板读取、输入监听、屏幕采集、绘图和桌面状态判断。排查时要记录会话、桌面、窗口站、窗口句柄、进程归属和权限边界。

## 入口

```text
DLL: user32.dll; Header: winuser.h
```

```cpp
auto result = RegisterWindowMessageW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\user32.dll | findstr /i RegisterWindowMessageW
```

## 参数与上下文

窗口消息接口要记录 HWND、消息号、wParam、lParam、超时和目标线程。输入和剪贴板接口要写清调用桌面、焦点窗口、格式 ID 和数据长度。GDI/DWM 接口要记录 HDC、位图尺寸、像素格式、窗口可见性和合成状态。

这是建立句柄、连接、映射或上下文的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期经常比单次返回值更能解释问题。

## 返回与错误

User32/GDI 接口的返回值类型差异很大，有 BOOL、句柄、计数和 LRESULT。失败时通常看 GetLastError，但部分消息接口的错误语义需要结合返回值和超时标志。

```cpp
LSTATUS status = result;
```

## 复核点

复查时，把会话 ID、桌面名、窗口进程、完整性级别、UIPI 限制和调用栈写清楚。涉及截图、剪贴板、键盘状态或窗口消息注入时，要提高敏感级别。
