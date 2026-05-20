# Steampipe 使用

Steampipe 用 SQL 查询云资源、GitHub、Kubernetes 等资产，适合资产盘点和安全审计。

## 常用命令

```bash
steampipe plugin install aws
```

```bash
steampipe query "select account_id, region from aws_account"
```

```bash
steampipe query "select name, public_access_block_configuration from aws_s3_bucket"
```

```bash
steampipe check benchmark.cis_v150
```

```bash
steampipe service start
```

适合把云资产变成可查询表，复杂审计可以保存 SQL 和结果。
