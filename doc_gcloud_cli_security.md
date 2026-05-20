# gcloud CLI 安全检查

gcloud CLI 用于检查 GCP 项目、IAM、Compute、Cloud Storage 和公开服务。先确认当前账号与项目，再进行枚举。

## 身份和项目

```bash
gcloud auth list
```

```bash
gcloud config list
```

```bash
gcloud projects list
```

```bash
gcloud config set project PROJECT_ID
```

## IAM 和服务账号

```bash
gcloud projects get-iam-policy PROJECT_ID
```

```bash
gcloud iam service-accounts list
```

```bash
gcloud iam service-accounts keys list --iam-account service@example.iam.gserviceaccount.com
```

## 资产和暴露面

```bash
gcloud compute instances list
```

```bash
gcloud compute firewall-rules list
```

```bash
gcloud storage buckets list
```

小记录：GCP 里服务账号权限经常决定横向范围。记录时把项目 ID、服务账号、绑定角色和公开防火墙规则放在一起。
