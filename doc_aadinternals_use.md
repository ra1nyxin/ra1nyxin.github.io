# AADInternals 使用

AADInternals 是 Entra ID 与 Microsoft 365 安全测试工具集。它覆盖租户枚举、令牌、同步配置和部分云身份场景，适合授权评估和实验环境复现。

## 模块加载

```bash
Import-Module AADInternals
```

```bash
Get-Command -Module AADInternals
```

```bash
Get-AADIntLoginInformation -UserName user@example.com
```

## 租户和域名

```bash
Get-AADIntTenantID -Domain example.com
```

```bash
Get-AADIntTenantDomains -Domain example.com
```

```bash
Invoke-AADIntReconAsOutsider -DomainName example.com
```

## 登录后检查

```bash
Get-AADIntAccessTokenForAADGraph -SaveToCache
```

```bash
Get-AADIntGlobalAdmins
```

```bash
Get-AADIntConditionalAccessPolicies
```

AADInternals 权限差异很明显，外部枚举、普通用户和管理员看到的内容不同。记录时要标注当前认证上下文。
