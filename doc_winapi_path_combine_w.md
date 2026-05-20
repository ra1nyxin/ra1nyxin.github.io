# Windows API 调用笔记：PathCombineW

PathCombineW 我会放在 路径拼接、URL 解析、注册表辅助和字符串规范化 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: shlwapi.dll; Header: shlwapi.h
```

```cpp
auto result = PathCombineW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\shlwapi.dll | findstr /i PathCombineW
```

## 记录字段

```text
input path, output path, URL component, flags, buffer length, HRESULT
```

## 复核点

```text
路径辅助函数要保存输入和输出两份，安全判断不能只看处理后的字符串
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
