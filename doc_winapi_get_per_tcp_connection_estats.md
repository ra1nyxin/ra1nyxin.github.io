# Windows API 调用笔记：GetPerTcpConnectionEStats

GetPerTcpConnectionEStats 常见于网络适配器枚举、路由表观察、接口状态变化和 TCP/UDP 统计采集场景。分析时要先分清它返回的是瞬时快照、异步通知还是可写的网络配置。
## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h / netioapi.h
```

```cpp
auto result = GetPerTcpConnectionEStats(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i GetPerTcpConnectionEStats
```

## 参数与上下文

Iphlpapi 和 NetIO 接口要记录地址族、接口 LUID 或 GUID、表项结构、通知回调、输入输出缓冲区长度，以及返回条目数。涉及异步通知时，还要保留回调上下文和注销句柄。

这类调用经常会先拿长度再取数据，缓冲区不足不一定是异常。记录最终成功读取的内容和前面的探测过程更有价值。

## 返回与错误

这组接口常返回 DWORD、NETIO_STATUS 或布尔状态。表枚举类调用要记录返回条目和释放路径，通知类调用则要确认注册、触发和注销是否闭合。

```cpp
int err = result == SOCKET_ERROR ? WSAGetLastError() : 0;
```

## 复核点

复核时保存接口索引、地址族、路由目标、适配器信息、调用身份和时间线。涉及 TCP/UDP 统计或路由变化时，再把前后快照放在一起对照。
