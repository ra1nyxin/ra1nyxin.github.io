# s3recon 使用

s3recon 用于枚举和验证 S3 bucket，适合品牌关键词与历史项目名检查。

## 常用命令

```bash
s3recon --help
```

```bash
s3recon --wordlist buckets.txt
```

```bash
s3recon --bucket example-backup
```

```bash
s3recon --wordlist buckets.txt --threads 20
```

```bash
s3recon --wordlist buckets.txt --output s3recon.txt
```

小记录：S3 结果要区分存在、可列目录、可读对象和可写对象。
