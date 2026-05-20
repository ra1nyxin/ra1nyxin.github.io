# BlobHunter 使用

BlobHunter 用于枚举 Azure Blob Storage，适合外部暴露面检查。

## 常用命令

```bash
python3 BlobHunter.py -k example
```

```bash
python3 BlobHunter.py -w words.txt
```

```bash
python3 BlobHunter.py -k example -t 20
```

```bash
python3 BlobHunter.py -k example -o azure_blobs.txt
```

```bash
curl -I https://example.blob.core.windows.net/container
```

Azure Blob 要区分容器公开、对象公开和存储账户公开，记录时写完整 URL。
