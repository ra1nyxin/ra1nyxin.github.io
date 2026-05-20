# Windows API 调用笔记：FwpmFilterEnum0

FwpmFilterEnum0 常用于 Windows Filtering Platform 过滤器、Provider 和引擎状态复核。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: fwpuclnt.dll; Header: fwpmu.h
```

```cpp
auto result = FwpmFilterEnum0(...);
```

```powershell
dumpbin /exports C:\Windows\System32\fwpuclnt.dll | findstr /i FwpmFilterEnum0
```

## 记录字段

```text
字段: engine handle, provider key, filter id, layer key, condition count
```

```text
复核: 过滤器枚举要写清 layer、provider 和权重，单看 filter name 很容易误判
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
