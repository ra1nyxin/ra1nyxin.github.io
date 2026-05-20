# Windows API 调用笔记：IWbemLocator::ConnectServer

IWbemLocator::ConnectServer 我会放在 WMI 命名空间连接、WQL 查询和方法调用复核 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: wbemprox.dll / fastprox.dll via COM; Header: wbemidl.h
```

```cpp
// COM method: IWbemLocator::ConnectServer(...)
```

```powershell
oleview.exe
```

## 我会记录

```text
字段: namespace, WQL, class name, method, HRESULT, returned object count
```

```text
复核: WMI 结果要写命名空间和查询语句，单看类名不够复现
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
