# AzureHound 使用

AzureHound 用于收集 Azure/Entra ID 数据并导入 BloodHound。

## 常用命令

```bash
azurehound list -u user@example.com -p pass
```

```bash
azurehound list --tenant TENANT_ID --json
```

```bash
azurehound list --refresh-token token.txt
```

```bash
azurehound list -o azurehound.json
```

```bash
azurehound configure
```

小记录：适合分析云身份路径，高权限角色、应用权限和同步账号要重点看。
