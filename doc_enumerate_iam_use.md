# enumerate-iam 使用

enumerate-iam 用于通过 AWS 凭据枚举当前身份允许的 IAM/API 动作。

## 常用命令

```bash
python3 enumerate-iam.py --access-key AKIA... --secret-key SECRET
```

```bash
python3 enumerate-iam.py --access-key AKIA... --secret-key SECRET --region us-east-1
```

```bash
python3 enumerate-iam.py --session-token TOKEN --access-key AKIA... --secret-key SECRET
```

```bash
python3 enumerate-iam.py --services iam,s3,ec2 --access-key AKIA... --secret-key SECRET
```

```bash
python3 enumerate-iam.py --output enumerate-iam.txt --access-key AKIA... --secret-key SECRET
```

适合拿到低权限 key 后判断实际可做动作，输出要和 CloudTrail 时间线对应。
