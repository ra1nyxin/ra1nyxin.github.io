# gcp_enum 使用

gcp_enum 用于 GCP 资源枚举，适合授权账号下快速摸清项目资产。

## 常用命令

```bash
python3 gcp_enum.py --help
```

```bash
python3 gcp_enum.py --project PROJECT_ID
```

```bash
python3 gcp_enum.py --project PROJECT_ID --service storage
```

```bash
python3 gcp_enum.py --project PROJECT_ID --service compute
```

```bash
python3 gcp_enum.py --project PROJECT_ID --output gcp_enum.json
```

GCP 枚举要写清当前 project、账号和激活凭据，避免混淆多项目结果。
