# Stormspotter 使用

Stormspotter 用图方式分析 Azure 资源关系和权限路径。它适合把订阅、资源组、身份、角色分配和关键资源放在一张图里看。

## 采集前确认

```bash
az account show
```

```bash
az account list --output table
```

采集前先确认租户、订阅和当前身份。多租户账号里很容易采到错误范围，后面图再漂亮也没意义。

## 采集和服务

```bash
stormcollector --tenant TENANT_ID
```

```bash
stormspotter-backend
```

```bash
stormspotter --server http://127.0.0.1:9090
```

后端和前端分开启动时，先确认数据导入成功。采集结果里如果订阅缺失，通常要回到 Azure 权限或 CLI 当前上下文查。

## 看图重点

```bash
stormspotter --help
```

优先看高权限身份、Owner/Contributor 分配、托管身份、Key Vault、存储账号和可横向移动的角色链。图里的路径要回到 Azure Portal 或 CLI 复核实际权限。
