# Windows API 调用笔记：ImpersonateLoggedOnUser

ImpersonateLoggedOnUser 用于让当前线程使用指定令牌进行模拟。服务端程序、RPC、命名管道、远程管理和授权检查里经常会出现。安全分析时重点看令牌来源、模拟级别和恢复是否正确。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h
```

```cpp
BOOL ok = ImpersonateLoggedOnUser(token);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i ImpersonateLoggedOnUser
```

## 参数关注

传入令牌需要具备合适类型和访问权限。模拟前后建议分别记录线程令牌和进程令牌，避免把线程身份变化误认为整个进程身份变化。模拟令牌的级别会影响能否访问远程资源。

## 返回与恢复

调用成功后当前线程进入模拟状态，结束时需要 RevertToSelf。异常路径也要保证恢复，否则后续代码可能带着错误身份继续运行。

```cpp
BOOL restored = RevertToSelf();
```

## 复核点

记录源令牌、调用线程、模拟前用户、模拟后用户、模拟级别、会话 ID 和恢复结果。涉及命名管道或 RPC 时，把客户端连接信息与令牌来源一起保存。
