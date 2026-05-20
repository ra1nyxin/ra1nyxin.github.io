# GCPBucketBrute 使用

GCPBucketBrute 用于枚举 Google Cloud Storage bucket 名称和公开权限。

## 常用命令

```bash
python3 gcpbucketbrute.py -k example
```

```bash
python3 gcpbucketbrute.py -k example -w words.txt
```

```bash
python3 gcpbucketbrute.py -f buckets.txt
```

```bash
python3 gcpbucketbrute.py -k example --check
```

```bash
python3 gcpbucketbrute.py -k example -o results.txt
```

小记录：命中 bucket 后继续用 gcloud storage 检查列表、读取和写入权限。
