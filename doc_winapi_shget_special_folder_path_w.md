# Windows API 调用笔记：SHGetSpecialFolderPathW

SHGetSpecialFolderPathW 我会放在 Shell 启动、特殊目录、文件关联和用户交互痕迹复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: shell32.dll; Header: shellapi.h / shlobj.h
```

```cpp
auto result = SHGetSpecialFolderPathW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\shell32.dll | findstr /i SHGetSpecialFolderPathW
```

## 记录字段

```text
verb, file path, parameters, show command, folder id, association result
```

## 复核点

```text
Shell 调用要区分 verb、参数和当前目录，很多误触发都来自这三个字段
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
