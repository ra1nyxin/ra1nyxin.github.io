# Windows API 调用笔记：GetFileSecurityW

GetFileSecurityW 多见于文件、目录、异步 I/O、完成端口和命名管道场景。这类接口覆盖文件系统对象、目录操作、文件属性、异步 I/O、完成端口和命名管道通信。记录时保留原始路径、最终对象、句柄访问掩码、共享模式、重解析点、OVERLAPPED 状态和管道端点身份。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h / aclapi.h / sddl.h / authz.h
```

```cpp
auto result = GetFileSecurityW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i GetFileSecurityW
```

## 参数与上下文

文件路径类接口要记录输入路径、规范化路径、目标路径和属性标志。异步 I/O 要记录 OVERLAPPED 指针、事件、pending 状态和完成字节数。命名管道要记录 pipe name、服务端进程、客户端进程、管道模式和消息边界。

这类调用经常会先拿长度再取数据，缓冲区不足不一定是异常。记录最终成功读取的内容和前面的探测过程更有价值。

## 返回与错误

文件接口多用 BOOL/HANDLE 和 GetLastError，异步请求中的 ERROR_IO_PENDING 是已提交状态。完成端口接口要区分超时、失败和成功取出完成包。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

回看记录时，把路径、句柄来源、对象 ID、调用身份、I/O 大小和完成结果放在一起。管道通信还要关联客户端 PID、服务端 PID 和连接时间。
