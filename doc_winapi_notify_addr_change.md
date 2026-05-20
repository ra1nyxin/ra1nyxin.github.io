# Windows API 调用笔记：NotifyAddrChange

NotifyAddrChange 常见于网络适配器枚举、路由表观察、接口状态变化和 TCP/UDP 统计采集场景。分析时要先分清它返回的是瞬时快照、异步通知还是可写的网络配置。
## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h
```

```cpp
auto result = NotifyAddrChange(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i NotifyAddrChange
```

## 参数与上下文

Iphlpapi 和 NetIO 接口要记录地址族、接口 LUID 或 GUID、表项结构、通知回调、输入输出缓冲区长度，以及返回条目数。涉及异步通知时，还要保留回调上下文和注销句柄。

这是会改变状态的接口，记录时要保存调用前状态、请求的新状态、调用身份、返回码和回滚路径。安全审计里要把它和前置查询、后续验证放在同一条链路中。

## 返回与错误

这组接口常返回 DWORD、NETIO_STATUS 或布尔状态。表枚举类调用要记录返回条目和释放路径，通知类调用则要确认注册、触发和注销是否闭合。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存接口索引、地址族、路由目标、适配器信息、调用身份和时间线。涉及 TCP/UDP 统计或路由变化时，再把前后快照放在一起对照。
