# Windows API 调用笔记：GetIpForwardTable2

GetIpForwardTable2 我会放在 网卡、路由、TCP/UDP 连接表和网络参数快照 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h
```

```cpp
auto result = GetIpForwardTable2(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i GetIpForwardTable2
```

## 我会记录

```text
字段: interface index, local address, remote address, state, owner pid
```

```text
复核: 连接表要带时间点和 PID，短连接环境里结果变化很快
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
