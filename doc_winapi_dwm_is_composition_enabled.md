# Windows API 调用笔记：DwmIsCompositionEnabled

DwmIsCompositionEnabled 我会放在 DWM 窗口属性、缩略图和桌面合成状态确认 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: dwmapi.dll; Header: dwmapi.h
```

```cpp
auto result = DwmIsCompositionEnabled(...);
```

```powershell
dumpbin /exports C:\Windows\System32\dwmapi.dll | findstr /i DwmIsCompositionEnabled
```

## 记录字段

```text
HWND, attribute id, thumbnail handle, composition state, HRESULT
```

## 复核点

```text
DWM 结果适合解释窗口可见性和渲染差异，仍要和 User32 窗口枚举对照
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
