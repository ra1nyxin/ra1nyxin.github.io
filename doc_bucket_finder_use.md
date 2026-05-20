# bucket_finder 使用

bucket_finder 用于根据字典查找 S3 bucket，适合补充 cloud_enum。

## 常用命令

```bash
ruby bucket_finder.rb wordlist.txt
```

```bash
ruby bucket_finder.rb wordlist.txt --download
```

```bash
ruby bucket_finder.rb wordlist.txt --region us-east-1
```

```bash
ruby bucket_finder.rb wordlist.txt > buckets.txt
```

```bash
aws s3 ls s3://example-backup --no-sign-request
```

小记录：老工具结果要手工复核，AWS 的错误响应有时会误导存在性判断。
