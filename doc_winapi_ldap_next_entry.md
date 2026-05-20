# Windows API 调用笔记：ldap_next_entry

ldap_next_entry 常见于 LDAP 连接建立、目录查询、属性遍历和绑定认证场景。分析时先分清它处理的是会话、搜索结果、属性值还是认证过程。
## 入口

```text
DLL: wldap32.dll; Header: winldap.h
```

```cpp
auto result = ldap_next_entry(...);
```

```powershell
dumpbin /exports C:\Windows\System32\wldap32.dll | findstr /i ldap_next_entry
```

## 参数与上下文

LDAP 接口要记录 LDAP 连接句柄、Base DN、Filter、Scope、属性列表、超时、认证方式和返回消息句柄。涉及 SASL、SSL 或分页时，还要保留选项值和服务器能力。

这是枚举或迭代类接口，重点记录枚举范围、过滤条件、游标位置、返回数量和结束状态。分页或批量返回时，要保留每批结果的顺序，方便后续和日志时间线对齐。

## 返回与错误

这组接口常返回 ULONG、指针或消息/结果句柄。查询类调用要记录返回条目数和释放函数，绑定类调用则要把认证方式、返回码和后续会话状态写清。

```cpp
auto status = result;
```

## 复核点

复核时保存服务器地址、Base DN、Filter、属性名、认证方式、调用身份和结果数量。涉及目录写入或认证失败时，再把服务器返回码和策略限制一起核对。
