# Windows API 调用笔记：FwpmProviderEnum0

FwpmProviderEnum0 我会放在 Windows Filtering Platform 过滤器、Provider 和引擎状态复核 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: fwpuclnt.dll; Header: fwpmu.h
```

```cpp
auto result = FwpmProviderEnum0(...);
```

```powershell
dumpbin /exports C:\Windows\System32\fwpuclnt.dll | findstr /i FwpmProviderEnum0
```

## 我会记录

```text
字段: engine handle, provider key, filter id, layer key, condition count
```

```text
复核: 过滤器枚举要写清 layer、provider 和权重，单看 filter name 很容易误判
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
