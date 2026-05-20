# Windows API 调用笔记：AuthzFreeResourceManager

AuthzFreeResourceManager 我会放在 AuthZ 资源管理器、访问检查和客户端上下文复核 时查。先做最小调用，把返回值、错误码和调用上下文写清楚，再放回具体样本或现场里判断。

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

## 记录字段

```text
resource manager, client context, security descriptor, access mask, audit info
```

## 复核点

```text
AuthZ 适合还原访问判定，输入的安全描述符和 token 上下文必须一起保存
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
