# MinIO Client mc 使用

`mc` 是 MinIO 和 S3 兼容存储的常用客户端。检查重点是 alias、bucket 策略、匿名访问、对象列表和写入权限。

## 配置连接

```bash
mc alias set target http://192.168.1.10:9000 ACCESS_KEY SECRET_KEY
```

```bash
mc alias list
```

```bash
mc admin info target
```

## Bucket 和对象

```bash
mc ls target
```

```bash
mc ls --recursive target/backups
```

```bash
mc stat target/backups/db.sql
```

## 策略检查

```bash
mc anonymous get target/backups
```

```bash
mc anonymous list target/backups
```

```bash
mc cp target/backups/db.sql ./db.sql
```

MinIO 常见风险是测试桶公开、控制台弱口令和长期 key 泄露。匿名策略和管理员接口要分开记录。
