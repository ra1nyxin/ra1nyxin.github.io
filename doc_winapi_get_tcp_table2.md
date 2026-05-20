# Windows API 调用笔记：GetTcpTable2

GetTcpTable2 常用于 网卡、路由、TCP/UDP 连接表和网络参数快照。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: iphlpapi.dll; Header: iphlpapi.h
```

```cpp
auto result = GetTcpTable2(...);
```

```powershell
dumpbin /exports C:\Windows\System32\iphlpapi.dll | findstr /i GetTcpTable2
```

## 记录字段

```text
字段: interface index, local address, remote address, state, owner pid
```

```text
复核: 连接表要带时间点和 PID，短连接环境里结果变化很快
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
