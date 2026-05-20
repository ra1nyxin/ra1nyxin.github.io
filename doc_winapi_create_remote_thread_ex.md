# Windows API 调用笔记：CreateRemoteThreadEx

CreateRemoteThreadEx 常用于 线程创建、线程池、APC、等待链和运行状态排查。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: kernel32.dll; Header: processthreadsapi.h / synchapi.h
```

```cpp
auto result = CreateRemoteThreadEx(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i CreateRemoteThreadEx
```

## 记录字段

```text
thread handle, start address, stack size, wait reason, APC target, last error
```

## 复核点

```text
线程相关结果要和进程、模块、栈和时间点对齐，单独一个 TID 意义有限
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
