# Windows API 调用笔记：CreatePen

CreatePen 我会放在 GDI 对象、屏幕捕获、字体和绘图资源泄漏排查 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: gdi32.dll; Header: wingdi.h
```

```cpp
auto result = CreatePen(...);
```

```powershell
dumpbin /exports C:\Windows\System32\gdi32.dll | findstr /i CreatePen
```

## 记录字段

```text
HDC, HBITMAP, object type, dimensions, selected object, last error
```

## 复核点

```text
GDI 资源问题要记录创建和释放位置，泄漏通常不在最后一次调用处
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
