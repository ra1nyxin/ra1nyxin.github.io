# Windows API 调用笔记：GetClipboardData

GetClipboardData 常用于 桌面、剪贴板、热键、输入和窗口消息排查。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: user32.dll; Header: winuser.h
```

```cpp
auto result = GetClipboardData(...);
```

```powershell
dumpbin /exports C:\Windows\System32\user32.dll | findstr /i GetClipboardData
```

## 记录字段

```text
window handle, desktop, message id, clipboard format, thread id, last error
```

## 复核点

```text
UI 相关记录要保护窗口标题和剪贴板内容，必要时只保留格式和来源进程
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
