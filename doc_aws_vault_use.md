# aws-vault 使用

aws-vault 用于安全管理 AWS 本地凭据，适合多账号测试和日常运维。

## 常用命令

```bash
aws-vault add prod
```

```bash
aws-vault list
```

```bash
aws-vault exec prod -- aws sts get-caller-identity
```

```bash
aws-vault exec prod --duration=1h -- aws s3 ls
```

```bash
aws-vault remove prod
```

小记录：本地评估多个账号时能减少明文 key 落盘，profile 名称要和项目记录一致。
