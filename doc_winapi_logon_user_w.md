# Windows API 调用笔记：LogonUserW

LogonUserW 多见于服务控制、目录服务、SAM、NetAPI 和会话管理场景。这类调用常用来服务管理、账号枚举、域信息查询、会话读取和远程管理。判断时要明确目标主机、调用身份、访问掩码、分页状态和返回结构级别。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h / winbase.h
```

```cpp
auto result = LogonUserW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i LogonUserW
```

## 参数与上下文

服务接口要记录服务名、显示名、二进制路径、启动类型、运行账号和 SCM 访问掩码。NetAPI/SAM/DS/WTS 接口要记录服务器名、信息级别、resume handle、返回数量、域 SID、会话 ID 和成员类型。

调用链最好按阶段拆开看：句柄从哪里来、对象是否被修改、返回值有没有被继续使用，都要留在同一条记录里。

## 返回与错误

NetAPI 返回 NET_API_STATUS，LSA/SAM 多用 NTSTATUS，WTS 和服务控制多用 BOOL/GetLastError。返回缓冲区要按对应 API 用 NetApiBufferFree、LsaFreeMemory、SamFreeMemory 或 WTSFreeMemory 释放。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

回看记录时，把远程主机、认证来源、管理员权限、网络连接、事件日志和对象字段一起保存。账号、组、共享、会话和服务变更应放在同一条管理行为时间线里。
