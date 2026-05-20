# Windows API 调用笔记：WaitForSingleObject

WaitForSingleObject 用于等待一个内核对象进入有信号状态。常见落点包括进程、线程、事件、互斥体、文件和等待定时器。排查卡死、超时、线程同步和资源竞争时，这个接口很有用。

## 入口

```text
DLL: kernel32.dll; Header: synchapi.h
```

```cpp
DWORD rc = WaitForSingleObject(handle, timeoutMs);
```

```powershell
dumpbin /exports C:\Windows\System32\kernel32.dll | findstr /i WaitForSingleObject
```

## 参数关注

`hHandle` 要确认对象类型。等待线程、进程、事件和互斥体得到的含义不同。`dwMilliseconds` 决定等待策略，`INFINITE` 可能导致界面卡死、服务停止缓慢或线程池耗尽。

## 返回值

常见返回值包括 `WAIT_OBJECT_0`、`WAIT_TIMEOUT`、`WAIT_FAILED`、`WAIT_ABANDONED`。等待互斥体时出现 `WAIT_ABANDONED` 说明持有者异常退出，后续共享状态需要重新校验。

```cpp
DWORD err = rc == WAIT_FAILED ? GetLastError() : ERROR_SUCCESS;
```

## 复核点

记录等待对象类型、句柄来源、超时时间、返回值、等待线程和调用栈。分析卡死问题时，把同一线程前后的锁、事件、I/O、RPC、窗口消息等待放在一起看。安全分析里，等待远程线程句柄通常要和前面的线程创建行为关联。
