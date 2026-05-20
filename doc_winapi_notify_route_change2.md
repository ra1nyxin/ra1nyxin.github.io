# Windows API 调用笔记：NotifyRouteChange2

NotifyRouteChange2 常见于路由表监控、接口状态观察和网络路径变化通知场景。分析时先分清它注册的是异步回调还是事件通知，再看路由变更发生前后的接口与地址状态。
## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h / netioapi.h
```

```cpp
auto result = NotifyRouteChange2(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i NotifyRouteChange2
```

## 参数与上下文

Iphlpapi 和 NetIO 接口要记录地址族、通知回调、调用线程、上下文指针、输入输出缓冲区长度，以及后续注销句柄。若调用和接口枚举、路由快照配合出现，还要把接口索引和目标前缀一并保留。

这是会改变状态的接口，记录时要保存调用前状态、请求的新状态、调用身份、返回码和回滚路径。安全审计里要把它和前置查询、后续验证放在同一条链路中。

## 返回与错误

这组接口常返回 DWORD 或 Win32 状态。通知注册成功并不代表一定会触发回调，复盘时还要核对回调是否真的进入、是否被注销，以及变更事件发生时系统里有没有对应的路由快照。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复核时保存地址族、接口索引、路由目标、调用身份、回调上下文和时间线。涉及网络抖动、VPN、虚拟网卡或路由切换时，再把前后路由表和适配器状态放在一起核对。
