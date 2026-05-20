# Windows API 调用笔记：AuthzFreeResourceManager

AuthzFreeResourceManager 放到AuthZ 访问检查和授权上下文场景里看并不罕见。AuthZ 接口用于构建授权上下文、执行访问检查、缓存授权结果和处理 claims/SID。它比传统 AccessCheck 更适合复杂服务端授权模型。记录时要保存资源管理器、客户端上下文、SID、claims、请求访问和授予结果。

## 入口

```text
DLL: authz.dll; Header: authz.h
```

```cpp
auto result = AuthzFreeResourceManager(...);
```

```powershell
dumpbin /exports C:\Windows\System32\authz.dll | findstr /i AuthzFreeResourceManager
```

## 参数与上下文

初始化类接口要记录上下文来源，是 token、SID 还是已有 AuthZ context。检查类接口要保存 security descriptor、OBJECT_TYPE_LIST、访问请求、回调数据和返回的 granted access。修改类接口要写清新增或删除的 claims/SID。

这是清理或释放类接口，适合用来核对生命周期是否闭合。需要记录释放对象来源、是否重复释放、释放后是否仍被访问，以及失败后的补救路径。

## 返回与错误

AuthZ 多数接口返回 BOOL 并配合 GetLastError。访问是否允许要看返回的授权结果和错误码，不能只看 API 调用成功。

```cpp
DWORD err = result ? ERROR_SUCCESS : GetLastError();
```

## 复核点

复查时，把客户端身份、资源安全描述符、请求权限、授予权限、claims、组成员关系和应用自身授权逻辑放在一起。
