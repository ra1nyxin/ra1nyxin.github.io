# Windows API 调用笔记：RevertToSelf

RevertToSelf 用于结束当前线程的模拟状态，恢复到进程原始安全上下文。它通常和 ImpersonateLoggedOnUser、ImpersonateNamedPipeClient、CoImpersonateClient 等接口配套出现。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h
```

```cpp
BOOL ok = RevertToSelf();
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i RevertToSelf
```

## 使用关注

调用点应放在模拟操作结束后的确定路径里，异常处理、提前返回和超时分支都要覆盖。服务端程序若忘记恢复，后续文件、注册表、网络访问可能继续使用客户端身份。

## 返回与错误

返回失败需要立即停止敏感操作。文档记录里应保存失败错误码、线程 ID、当时模拟的用户和后续处理方式。

```cpp
DWORD err = ok ? ERROR_SUCCESS : GetLastError();
```

## 复核点

记录模拟开始 API、模拟令牌来源、恢复调用位置、恢复结果和调用栈。排查权限混乱时，把同一线程上的多次模拟和恢复按时间线展开。
