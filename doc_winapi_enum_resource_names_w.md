# Windows API 调用笔记：EnumResourceNamesW

EnumResourceNamesW 我会放在 DLL 加载、搜索路径、导出解析和资源定位 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: kernel32.dll; Header: libloaderapi.h
```

```cpp
auto result = EnumResourceNamesW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i EnumResourceNamesW
```

## 记录字段

```text
DLL path, module handle, flags, export name, resource id, last error
```

## 复核点

```text
加载 DLL 时要记录搜索路径和 flags，很多劫持问题都来自隐式搜索顺序
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
