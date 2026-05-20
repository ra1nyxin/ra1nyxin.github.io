# S3Scanner 使用

S3Scanner 适合批量检查 S3 bucket 是否存在、是否允许列目录、是否可读写。外部暴露面评估和泄露排查里很常用。

## 单 bucket 检查

```bash
s3scanner scan --bucket example-backup
```

```bash
s3scanner scan --bucket example-backup --enumerate
```

```bash
s3scanner scan --bucket example-backup --provider aws
```

## 批量检查

```bash
s3scanner scan --buckets-file buckets.txt
```

```bash
s3scanner scan --buckets-file buckets.txt --threads 20
```

```bash
s3scanner scan --buckets-file buckets.txt --json results.json
```

## AWS CLI 复核

```bash
aws s3 ls s3://example-backup --no-sign-request
```

```bash
aws s3api get-bucket-acl --bucket example-backup --no-sign-request
```

小记录：公开 bucket 的风险看对象内容和权限组合。能列目录、能读对象、能写对象的等级不同，记录时要分开写。
