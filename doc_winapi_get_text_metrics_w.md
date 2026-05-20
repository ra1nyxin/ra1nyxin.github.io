# Windows API 调用笔记：GetTextMetricsW

GetTextMetricsW 放到窗口、桌面、输入、剪贴板、GDI 和 DWM场景里看并不罕见。这类调用常用来界面自动化、窗口枚举、剪贴板读取、输入监听、屏幕采集、绘图和桌面状态判断。排查时要记录会话、桌面、窗口站、窗口句柄、进程归属和权限边界。

## 入口

```text
DLL: gdi32.dll; Header: wingdi.h
```

```cpp
auto result = GetTextMetricsW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\gdi32.dll | findstr /i GetTextMetricsW
```

## 参数与上下文

窗口消息接口要记录 HWND、消息号、wParam、lParam、超时和目标线程。输入和剪贴板接口要写清调用桌面、焦点窗口、格式 ID 和数据长度。GDI/DWM 接口要记录 HDC、位图尺寸、像素格式、窗口可见性和合成状态。

这类调用经常会先拿长度再取数据，缓冲区不足不一定是异常。记录最终成功读取的内容和前面的探测过程更有价值。

## 返回与错误

User32/GDI 接口的返回值类型差异很大，有 BOOL、句柄、计数和 LRESULT。失败时通常看 GetLastError，但部分消息接口的错误语义需要结合返回值和超时标志。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时，将会话 ID、桌面名、窗口进程、完整性级别、UIPI 限制和调用栈写清楚。涉及截图、剪贴板、键盘状态或窗口消息注入时，要提高敏感级别。
