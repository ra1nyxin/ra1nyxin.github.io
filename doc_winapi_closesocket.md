# Windows API 调用笔记：closesocket

closesocket 常用于 Socket 生命周期、选项、地址转换和异步网络事件。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: ws2_32.dll; Header: winsock2.h / ws2tcpip.h
```

```cpp
auto result = closesocket(...);
```

```powershell
dumpbin /exports C:\Windows\System32\ws2_32.dll | findstr /i closesocket
```

## 记录字段

```text
socket, address, port, flags, option level, WSA error
```

## 复核点

```text
Socket 调试要把 address family、protocol 和 WSA 错误码写全
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
