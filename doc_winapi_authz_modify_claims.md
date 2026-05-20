# Windows API 调用笔记：AuthzModifyClaims

AuthzModifyClaims 常出现在AuthZ 访问检查和授权上下文场景。AuthZ 接口用于构建授权上下文、执行访问检查、缓存授权结果和处理 claims/SID。它比传统 AccessCheck 更适合复杂服务端授权模型。记录时要保存资源管理器、客户端上下文、SID、claims、请求访问和授予结果。

## 入口

```text
DLL: authz.dll; Header: authz.h
```

```cpp
auto result = AuthzModifyClaims(...);
```

```powershell
dumpbin /exports C:\Windows\System32\authz.dll | findstr /i AuthzModifyClaims
```

## 参数与上下文

初始化类接口要记录上下文来源，是 token、SID 还是已有 AuthZ context。检查类接口要保存 security descriptor、OBJECT_TYPE_LIST、访问请求、回调数据和返回的 granted access。修改类接口要写清新增或删除的 claims/SID。

这是会改变状态的接口，记录时要保存调用前状态、请求的新状态、调用身份、返回码和回滚路径。安全审计里要把它和前置查询、后续验证放在同一条链路中。

## 返回与错误

AuthZ 多数接口返回 BOOL 并配合 GetLastError。访问是否允许要看返回的授权结果和错误码，不能只看 API 调用成功。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

回看记录时，把客户端身份、资源安全描述符、请求权限、授予权限、claims、组成员关系和应用自身授权逻辑放在一起。
