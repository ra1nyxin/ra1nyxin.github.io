# Windows API 调用笔记：CreateServiceW

CreateServiceW 用于在服务控制管理器中创建服务项。它常见于安装程序、代理软件、驱动安装、运维工具和安全告警。判断服务创建行为时，要重点看服务类型、二进制路径、启动方式、运行账号和创建来源。

## 入口

```text
DLL: advapi32.dll; Header: winsvc.h
```

```cpp
SC_HANDLE svc = CreateServiceW(scm, name, display, access, type, startType, errorControl, binaryPath, group, nullptr, deps, account, password);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i CreateServiceW
```

## 参数关注

`lpServiceName` 是内部名，`lpDisplayName` 是显示名，二者都要保存。`dwServiceType` 区分普通服务、驱动服务、共享进程服务。`dwStartType` 会影响持久化程度，自动启动和延迟启动需要重点关注。

`lpBinaryPathName` 最关键。需要保存原始字符串、展开后的路径、参数、文件签名、哈希、创建时间和目录权限。路径带引号、带参数、指向脚本解释器或可写目录时要继续追踪。

## 返回与错误

创建失败常见于权限不足、服务名已存在、路径无效或 SCM 句柄权限不够。成功后返回服务句柄，需要 CloseServiceHandle。

```cpp
DWORD err = svc ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录创建进程、用户、服务名、显示名、服务类型、启动类型、二进制路径、运行账号、依赖项和后续是否启动。若目标主机是远程系统，还要关联认证事件、RPC 连接和源地址。
