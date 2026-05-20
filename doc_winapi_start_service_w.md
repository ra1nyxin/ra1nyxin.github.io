# Windows API 调用笔记：StartServiceW

StartServiceW 用于启动已存在的服务。它本身只触发服务启动，真正需要分析的是服务配置、启动参数、调用者身份和服务进程后续行为。

## 入口

```text
DLL: advapi32.dll; Header: winsvc.h
```

```cpp
BOOL ok = StartServiceW(service, argc, argv);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i StartServiceW
```

## 参数关注

`hService` 来源要能追溯到 OpenServiceW 或 CreateServiceW。`dwNumServiceArgs` 和 `lpServiceArgVectors` 很容易被忽略，某些服务会根据启动参数切换模式或加载配置。

## 返回与状态

StartServiceW 返回成功只代表启动请求已提交。服务是否进入运行状态，要继续 QueryServiceStatusEx 或查看服务控制管理器事件。常见错误包括服务已运行、权限不足、依赖服务未启动、服务启动超时。

```cpp
BOOL okStatus = QueryServiceStatusEx(service, SC_STATUS_PROCESS_INFO, buffer, size, &needed);
```

## 复核点

记录服务名、调用进程、调用身份、启动参数、启动前配置、启动后 PID、服务账号和事件日志。若启动前刚出现 CreateServiceW 或 ChangeServiceConfigW，需要按同一操作链复盘。
