# Windows API 调用笔记：WriteFile

WriteFile 在文件、目录、异步 I/O、完成端口和命名管道里出现得很多。这类接口覆盖文件系统对象、目录操作、文件属性、异步 I/O、完成端口和命名管道通信。记录时保留原始路径、最终对象、句柄访问掩码、共享模式、重解析点、OVERLAPPED 状态和管道端点身份。

## 入口

```text
DLL: kernel32.dll; Header: windows.h
```

```cpp
auto result = WriteFile(...);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i WriteFile
```

## 参数与上下文

文件路径类接口要记录输入路径、规范化路径、目标路径和属性标志。异步 I/O 要记录 OVERLAPPED 指针、事件、pending 状态和完成字节数。命名管道要记录 pipe name、服务端进程、客户端进程、管道模式和消息边界。

这是会改变状态的接口，记录时要保存调用前状态、请求的新状态、调用身份、返回码和回滚路径。安全审计里要把它和前置查询、后续验证放在同一条链路中。

## 返回与错误

文件接口多用 BOOL/HANDLE 和 GetLastError，异步请求中的 ERROR_IO_PENDING 是已提交状态。完成端口接口要区分超时、失败和成功取出完成包。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

回看记录时，把路径、句柄来源、对象 ID、调用身份、I/O 大小和完成结果放在一起。管道通信还要关联客户端 PID、服务端 PID 和连接时间。
