# Windows API 调用笔记：AuthzOpenObjectAudit

AuthzOpenObjectAudit 多见于 AuthZ 访问检查和授权上下文场景。AuthZ 接口用于构建授权上下文、执行访问检查、缓存授权结果和处理 claims/SID。它比传统 AccessCheck 更适合复杂服务端授权模型。记录时要保存资源管理器、客户端上下文、SID、claims、请求访问和授予结果。

## 入口

```text
DLL: authz.dll; Header: authz.h
```

```cpp
auto result = AuthzOpenObjectAudit(...);
```

```powershell
dumpbin /exports C:\Windows\System32\authz.dll | findstr /i AuthzOpenObjectAudit
```

## 参数与上下文

初始化类接口要记录上下文来源，是 token、SID 还是已有 AuthZ context。检查类接口要保存 security descriptor、OBJECT_TYPE_LIST、访问请求、回调数据和返回的 granted access。修改类接口要写清新增或删除的 claims/SID。

这是建立句柄、连接、映射或上下文的入口，重点记录目标对象、访问掩码、创建标志、命名空间和后续释放接口。句柄生命周期经常比单次返回值更能解释问题。

## 返回与错误

AuthZ 多数接口返回 BOOL 并配合 GetLastError。访问是否允许要看返回的授权结果和错误码，不能只看 API 调用成功。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

最后核对时，把客户端身份、资源安全描述符、请求权限、授予权限、claims、组成员关系和应用自身授权逻辑放在一起。
