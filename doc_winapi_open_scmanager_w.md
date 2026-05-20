# Windows API 调用笔记：OpenSCManagerW

OpenSCManagerW 常用于 服务枚举、服务配置和服务权限复核。先写一个最小调用，确认返回值和错误码，再结合具体场景复核。

## 入口

```text
DLL: advapi32.dll; Header: winsvc.h
```

```cpp
auto result = OpenSCManagerW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i OpenSCManagerW
```

## 记录字段

```text
字段: service name, binary path, start type, account, DACL, status
```

```text
复核: 服务风险通常在 binary path、账号和 DACL，服务名只是索引
```

调用成功只代表入口可达；返回值、错误码、调用身份和目标对象当时的状态需要放在同一条记录里复核。
