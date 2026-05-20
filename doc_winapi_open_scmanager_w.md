# Windows API 调用笔记：OpenSCManagerW

OpenSCManagerW 用于打开服务控制管理器。它是服务查询、创建、修改、启动和删除等操作的入口。分析服务相关事件时，先看这个调用请求了什么权限，再看后续服务操作。

## 入口

```text
DLL: advapi32.dll; Header: winsvc.h
```

```cpp
SC_HANDLE scm = OpenSCManagerW(machineName, databaseName, SC_MANAGER_CONNECT);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i OpenSCManagerW
```

## 参数关注

`lpMachineName` 为 null 表示本机，远程机器名需要记录网络路径和调用凭据。`lpDatabaseName` 通常是 `ServicesActive`。`dwDesiredAccess` 是重点，查询只需要连接权限，创建服务需要 `SC_MANAGER_CREATE_SERVICE`，枚举需要 `SC_MANAGER_ENUMERATE_SERVICE`。

## 返回与错误

失败常见于权限不足、远程服务不可达、防火墙拦截、RPC 问题或服务控制管理器不可用。返回的句柄使用后需要 CloseServiceHandle。

```cpp
DWORD err = scm ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录目标主机、数据库名、访问掩码、调用身份、登录类型、源进程和后续 CreateServiceW、OpenServiceW、ChangeServiceConfigW、StartServiceW、DeleteService 调用。远程服务管理需要和网络连接、认证日志一起看。
