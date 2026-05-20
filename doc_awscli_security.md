# AWS CLI 安全检查

AWS CLI 适合在授权账号下检查身份、权限、S3、IAM、EC2 和安全组。先确认当前身份，再按服务拆开记录，避免把不同账号的结果混在一起。

## 身份和配置

```bash
aws sts get-caller-identity
```

```bash
aws configure list
```

```bash
aws iam get-user
```

## IAM 和权限

```bash
aws iam list-attached-user-policies --user-name alice
```

```bash
aws iam list-groups-for-user --user-name alice
```

```bash
aws iam list-access-keys --user-name alice
```

## 资产和暴露面

```bash
aws ec2 describe-instances --query 'Reservations[].Instances[].{Id:InstanceId,State:State.Name,PublicIp:PublicIpAddress}'
```

```bash
aws ec2 describe-security-groups --query 'SecurityGroups[].{Group:GroupName,Ingress:IpPermissions}'
```

```bash
aws s3 ls
```

AWS 记录要写 region、profile 和账号 ID。安全组的 `0.0.0.0/0`、长期 Access Key、公开 S3 是优先复核项。
