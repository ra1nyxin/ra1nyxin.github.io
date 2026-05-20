# Windows API 调用笔记：ChangeServiceConfig2W

ChangeServiceConfig2W 我会放在 服务枚举、服务配置和服务权限复核 时查。我一般先写一个最小调用，把返回值和错误码跑通，再把它放回具体场景里看。

## 入口

```text
DLL: advapi32.dll; Header: winsvc.h
```

```cpp
auto result = ChangeServiceConfig2W(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i ChangeServiceConfig2W
```

## 我会记录

```text
字段: service name, binary path, start type, account, DACL, status
```

```text
复核: 服务风险通常在 binary path、账号和 DACL，服务名只是索引
```

调用成功只代表入口可达；我会把返回值、错误码、调用身份和目标对象当时的状态放在同一条记录里看。
