# Azure CLI 安全检查

Azure CLI 适合检查租户、订阅、资源组、角色分配、存储账户和公开入口。先固定订阅上下文，再做资源枚举。

## 身份和订阅

```bash
az account show
```

```bash
az account list --output table
```

```bash
az account set --subscription "SUBSCRIPTION_ID"
```

## 角色和资源

```bash
az role assignment list --assignee user@example.com --all
```

```bash
az resource list --output table
```

```bash
az group list --output table
```

## 存储和网络

```bash
az storage account list --query '[].{name:name,resourceGroup:resourceGroup,allowBlobPublicAccess:allowBlobPublicAccess}' --output table
```

```bash
az network nsg list --query '[].{name:name,resourceGroup:resourceGroup}' --output table
```

```bash
az vm list-ip-addresses --output table
```

小记录：Azure 结果要按租户和订阅分开存。存储公开访问、Owner 角色过多、NSG 放开管理端口是常见高优先级问题。
