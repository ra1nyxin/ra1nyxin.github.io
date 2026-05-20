# ROADtools 使用

ROADtools 用于 Azure AD 和 Entra ID 枚举，适合做租户、应用、服务主体、角色和条件访问策略检查。它在云身份安全评估里很有价值。

## 登录和数据收集

```bash
roadrecon auth
```

```bash
roadrecon gather
```

```bash
roadrecon gather --mfa
```

## Web 查看

```bash
roadrecon gui
```

```bash
roadrecon gui -d roadrecon.db
```

## 查询数据

```bash
roadrecon plugin policies
```

```bash
roadrecon plugin bloodhound
```

```bash
roadtx listtokens
```

ROADtools 的结果要和 Azure CLI 输出互相印证。重点看高权限角色、应用权限、遗留服务主体和条件访问覆盖范围。
