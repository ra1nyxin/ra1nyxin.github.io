# Windows API 调用笔记：CredUnPackAuthenticationBufferW

CredUnPackAuthenticationBufferW 在Credential Manager 和凭据交互里很常见，覆盖的内容主要是读取、枚举、写入或删除 Windows Credential Manager 中的凭据记录。常见落点包括客户端登录、远程连接、企业 SSO、浏览器同步工具。记录时保留 target name、type、persistence、user name、blob size、调用身份和会话上下文，凭据原始内容不能进入普通文档。

## 入口

```text
DLL: advapi32.dll; Header: wincred.h
```

```cpp
auto result = CredUnPackAuthenticationBufferW(...);
```

```powershell
dumpbin /exports C:\Windows\System32\advapi32.dll | findstr /i CredUnPackAuthenticationBufferW
```

## 参数与上下文

Credential Manager 接口要记录目标名、凭据类型、持久化范围、用户字段、是否受保护、输入输出缓冲区长度和调用会话。UI 相关接口还要记录窗口句柄、提示选项和认证包缓冲区格式。

这类记录按生命周期写最清楚：先看对象如何取得，再看执行了什么操作，最后看清理和错误码是否闭合。

## 返回与错误

Cred* 接口多数返回 BOOL 并通过 GetLastError 给出失败原因，返回的凭据结构使用 CredFree 释放。凭据不存在、权限不足、格式不匹配和会话隔离要分开记录。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复查时，把凭据目标、调用进程、登录用户、会话 ID、持久化范围和后续网络连接放在一起。涉及密码、Token、Cookie、连接串等敏感值时，只保存长度、类型和摘要。
