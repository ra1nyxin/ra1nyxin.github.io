# Windows API 调用笔记：RegQueryValueExW

RegQueryValueExW 我会放在 注册表项、策略值和配置变化监控 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: advapi32.dll; Header: winreg.h
```

```cpp
auto result = RegQueryValueExW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i RegQueryValueExW
```

## 我会记录

```text
字段: root key, subkey, value name, type, data length, WOW64 view
```

```text
复核: 注册表要标注 32/64 位视图，很多误差都来自重定向
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
