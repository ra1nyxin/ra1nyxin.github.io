# Windows API 调用笔记：ldap::value::free::len

ldap::value::free::len 常用于 LDAP 连接、绑定、搜索和目录属性读取。建议先做最小调用，记录返回值、错误码和调用上下文，再结合具体样本或现场现象判断。

## 入口

```text
DLL: wldap32.dll; Header: winldap.h
```

```cpp
// COM method: ldap::value::free::len(...)
```

```powershell
oleview.exe
```

## 记录字段

```text
server, base DN, filter, scope, attribute list, result code
```

## 复核点

```text
LDAP 查询必须保存 base DN、filter 和 scope，结果条数本身没有上下文意义
```

调用笔记只保留能复现判断的内容：输入、输出、错误码、调用身份、系统版本和目标对象状态。敏感原始值单独存放，不混进普通文档。
