# Windows API 调用笔记：DwmQueryThumbnailSourceSize

DwmQueryThumbnailSourceSize 常用于 DWM 窗口属性、缩略图和桌面合成状态确认。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: dwmapi.dll; Header: dwmapi.h
```

```cpp
auto result = DwmQueryThumbnailSourceSize(...);
```

```powershell
dumpbin /exports C:\Windows\System32\dwmapi.dll | findstr /i DwmQueryThumbnailSourceSize
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
