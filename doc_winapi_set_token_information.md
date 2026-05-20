# Windows API 调用笔记：SetTokenInformation

SetTokenInformation 常用于 Token 过滤、受限 Token、模拟和登录会话创建。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: advapi32.dll; Header: securitybaseapi.h / winbase.h
```

```cpp
auto result = SetTokenInformation(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i SetTokenInformation
```

## 记录字段

```text
token handle, token type, impersonation level, logon type, privileges, integrity level
```

## 复核点

```text
Token 变化要保存变化前后两份权限列表，否则很难判断过滤效果
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
