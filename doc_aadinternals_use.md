# AADInternals 使用

AADInternals 更像一套围绕 Azure AD 的工作笔记。它常用来摸租户边界、看外部可见信息、检查同步痕迹，再顺手看条件访问和管理员对象。很多命令输出都短，真正有用的是把几条信息拼起来看。

## 起手

```bash
Import-Module AADInternals
```

```bash
Get-Command -Module AADInternals
```

```bash
Get-AADIntLoginInformation -UserName user@example.com
```

先确认模块真的进了当前会话，再看命令列表有没有完整展开。会话里少了身份上下文时，很多命令看起来像成功，实际拿到的只是半截信息。

## 租户边界

```bash
Get-AADIntTenantID -Domain example.com
```

```bash
Get-AADIntTenantDomains -Domain example.com
```

```bash
Invoke-AADIntReconAsOutsider -DomainName example.com
```

这几条适合先把租户轮廓摸出来。租户 ID、域名列表、外部视角能看到的对象，通常足够把后续检查方向先定住。

## 登录之后

```bash
Get-AADIntAccessTokenForAADGraph -SaveToCache
```

```bash
Get-AADIntGlobalAdmins
```

```bash
Get-AADIntConditionalAccessPolicies
```

拿到会话后，重点不在“有没有结果”，而在结果和当前身份对不对得上。不同角色看到的管理员、策略、同步对象差别挺大，记录时把账号、认证方式和时间一起放进去，后面回看才不会断上下文。

## 看同步

```bash
Get-AADIntSyncSettings
```

```bash
Get-AADIntDirSyncConfiguration
```

如果目录里有本地同步，这一块很值得顺手看一下。同步配置、目录角色和当前可见对象放在一起比，往往比单看管理员列表更有信息量。
