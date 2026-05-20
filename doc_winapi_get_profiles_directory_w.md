# Windows API 调用笔记：GetProfilesDirectoryW

GetProfilesDirectoryW 常用于 用户 Profile、漫游配置和配置文件状态检查。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: profapi.dll; Header: profinfo.h
```

```cpp
auto result = GetProfilesDirectoryW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\profapi.dll | findstr /i GetProfilesDirectoryW
```

## 记录字段

```text
SID, profile path, flags, load state, error code
```

## 复核点

```text
Profile API 结果要和用户 SID 对齐，同名用户在不同域里不能混用
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
