# Vault CLI 检查

Vault CLI 用于 HashiCorp Vault 身份、策略和 secret 检查。

## 常用命令

```bash
vault status
```

```bash
vault login
```

```bash
vault token lookup
```

```bash
vault secrets list
```

```bash
vault kv get secret/app
```

Vault 评估要先确认 token 来源和权限，读取 secret 只取必要样本。
