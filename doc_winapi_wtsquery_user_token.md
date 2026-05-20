# Windows API 调用笔记：WTSQueryUserToken

WTSQueryUserToken 用于获取指定会话中登录用户的令牌。它常用于服务进程以用户身份启动辅助进程、桌面代理和远程会话管理。该接口需要较高权限，记录时要特别关注调用身份。

## 入口

```text
DLL: wtsapi32.dll; Header: wtsapi32.h
```

```cpp
BOOL ok = WTSQueryUserToken(sessionId, &token);
```

```powershell
dumpbin /exports C:\Windows\System32\wtsapi32.dll | findstr /i WTSQueryUserToken
```

## 参数关注

`SessionId` 应来自 WTS 枚举或进程会话信息。服务程序调用前要确认目标会话处于活动状态，并记录用户、域和客户端来源。返回令牌通常还会配合 DuplicateTokenEx 或 CreateProcessAsUserW。

## 返回与权限

失败常见于调用者权限不足、会话不存在、会话无用户登录或系统策略限制。成功后的令牌句柄需要关闭。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录调用进程、服务账号、目标会话 ID、会话用户、令牌类型、后续复制或进程创建行为。若用于跨会话启动进程，要把环境块、桌面名和用户配置文件加载状态一起检查。
