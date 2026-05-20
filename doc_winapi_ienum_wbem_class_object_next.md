# Windows API 调用笔记：IEnumWbemClassObject::Next

IEnumWbemClassObject::Next 常用于 WMI 命名空间连接、WQL 查询和方法调用复核。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: wbemprox.dll / fastprox.dll via COM; Header: wbemidl.h
```

```cpp
// COM method: IEnumWbemClassObject::Next(...)
```

```powershell
oleview.exe
```

## 记录字段

```text
字段: namespace, WQL, class name, method, HRESULT, returned object count
```

```text
复核: WMI 结果要写命名空间和查询语句，单看类名不够复现
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
