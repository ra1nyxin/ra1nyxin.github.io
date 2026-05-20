# Windows API 调用笔记：RegEnumKeyExW

RegEnumKeyExW 常用于 注册表项、策略值和配置变化监控。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: advapi32.dll; Header: winreg.h
```

```cpp
auto result = RegEnumKeyExW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i RegEnumKeyExW
```

## 记录字段

```text
字段: root key, subkey, value name, type, data length, WOW64 view
```

```text
复核: 注册表要标注 32/64 位视图，很多误差都来自重定向
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
