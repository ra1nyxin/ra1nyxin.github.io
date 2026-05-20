# Windows API 调用笔记：WTSStartRemoteControlSessionW

WTSStartRemoteControlSessionW 常用于 终端服务、会话消息、远程控制和会话变化复核。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: wtsapi32.dll; Header: wtsapi32.h
```

```cpp
auto result = WTSStartRemoteControlSessionW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wtsapi32.dll | findstr /i WTSStartRemoteControlSessionW
```

## 记录字段

```text
server handle, session id, user, state, message result, process id
```

## 复核点

```text
终端服务接口要写 session id 和 server handle，本机和远程服务器结果不同
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
