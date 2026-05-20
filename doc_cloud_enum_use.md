# cloud_enum 使用

cloud_enum 用来枚举 AWS、Azure、GCP 上可能公开的对象存储和云资源命名。它适合外部资产梳理和品牌关键词检查。

## 基础枚举

```bash
cloud_enum -k example
```

```bash
cloud_enum -k example -k examplecorp
```

```bash
cloud_enum -k example --disable-azure
```

## 字典和线程

```bash
cloud_enum -kf keywords.txt
```

```bash
cloud_enum -kf keywords.txt -t 20
```

```bash
cloud_enum -kf keywords.txt -l results.log
```

## 结果复核

```bash
aws s3 ls s3://example-backup --no-sign-request
```

```bash
curl -I https://example.blob.core.windows.net/
```

云资源枚举要准备品牌名、缩写、项目代号和历史域名。命中公开桶后，先确认列表权限，再看对象读取权限。
