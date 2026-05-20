# Windows API 调用笔记：FreeEnvironmentStringsW

FreeEnvironmentStringsW 我会放在 进程创建、启动参数复核和父子进程关系分析 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: kernel32.dll; Header: processthreadsapi.h
```

```cpp
auto result = FreeEnvironmentStringsW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i FreeEnvironmentStringsW
```

## 记录字段

```text
application name, command line, current directory, creation flags, inherited handles, last error
```

## 复核点

```text
启动参数、当前目录和继承句柄要放在一起看，很多异常行为都藏在这几项里
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
