# Windows API 调用笔记：GetIfEntry2

GetIfEntry2 我会放在 邻居表、接口统计、DNS 服务器和网络状态变化跟踪 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h / netioapi.h
```

```cpp
auto result = GetIfEntry2(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i GetIfEntry2
```

## 记录字段

```text
interface LUID, address, route metric, neighbor state, owner pid
```

## 复核点

```text
网络状态要按接口记录，WiFi、VPN、虚拟网卡混在一起会误导判断
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
