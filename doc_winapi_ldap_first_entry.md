# Windows API 调用笔记：ldap_first_entry

ldap_first_entry 常见于 LDAP 连接建立、目录查询、属性遍历和绑定认证场景。分析时先分清它处理的是会话、搜索结果、属性值还是认证过程。
## 入口

```text
DLL: wldap32.dll; Header: winldap.h
```

```cpp
auto result = ldap_first_entry(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wldap32.dll | findstr /i ldap_first_entry
```

## 参数与上下文

LDAP 接口要记录 LDAP 连接句柄、Base DN、Filter、Scope、属性列表、超时、认证方式和返回消息句柄。涉及 SASL、SSL 或分页时，还要保留选项值和服务器能力。

上下文比单次调用更重要。记录对象来源、访问权限、返回状态和后续 API，后面复盘时才不容易断线。

## 返回与错误

这组接口常返回 ULONG、指针或消息/结果句柄。查询类调用要记录返回条目数和释放函数，绑定类调用则要把认证方式、返回码和后续会话状态写清。

```cpp
auto status = result;
```

## 复核点

复核时保存服务器地址、Base DN、Filter、属性名、认证方式、调用身份和结果数量。涉及目录写入或认证失败时，再把服务器返回码和策略限制一起核对。
