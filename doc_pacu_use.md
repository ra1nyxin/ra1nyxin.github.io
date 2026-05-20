# Pacu 云安全检查

Pacu 是 AWS 安全测试框架，适合在授权账号下做权限枚举、错误配置检查和攻击路径验证。使用前先确认 profile、region 和测试边界。

## 会话和凭据

```bash
pacu
```

```bash
set_keys
```

```bash
import_keys --profile default
```

## 枚举模块

```bash
run iam__enum_users_roles_policies_groups
```

```bash
run ec2__enum
```

```bash
run s3__bucket_finder
```

## 结果查看

```bash
data IAM
```

```bash
data EC2
```

```bash
whoami
```

小记录：Pacu 的模块很多，建议一次只跑一类。云环境记录要带上账号 ID、region、profile 和模块名称。
