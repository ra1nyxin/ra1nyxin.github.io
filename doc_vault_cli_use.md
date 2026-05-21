# Vault CLI 检查

Vault CLI 用于检查 HashiCorp Vault 的状态、身份、策略和 secret 访问边界。评估时先确认当前 token 从哪里来、能做什么，再决定是否读取少量样本。

## 状态和登录

```bash
vault status
```

```bash
vault login
```

```bash
vault token lookup
```

`vault status` 先看 seal 状态、HA 状态和版本。登录后马上查 token，重点看 policies、ttl、renewable、orphan 这些字段。

## secret 引擎

```bash
vault secrets list
```

```bash
vault kv get secret/app
```

```bash
vault kv metadata get secret/app
```

读取 secret 时只取必要样本，别把整棵路径都拉下来。KV v1 和 v2 的路径语义不一样，看到 metadata 时要顺手确认版本。

## 策略复核

```bash
vault policy list
```

```bash
vault policy read app-policy
```

策略里重点看通配符、`sudo` capability、secret 路径范围和 auth backend 管理权限。能管理 token、policy、auth method 的身份要单独标出来。

## 习惯

Vault 记录里不要写真实 secret 值。保留路径、权限、样本字段名和访问结果就够了，敏感值只在授权范围内临时查看。
