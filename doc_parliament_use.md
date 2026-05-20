# Parliament 使用

Parliament 用于 lint AWS IAM policy，适合提交前检查策略错误和危险授权。

## 常用命令

```bash
parliament --file policy.json
```

```bash
parliament --file policy.json --json
```

```bash
parliament --auth-details-file auth.json
```

```bash
parliament --include-community-auditors --file policy.json
```

```bash
aws iam get-policy-version --policy-arn arn --version-id v1 > policy.json
```

小记录：适合检查语法、资源范围和危险权限，实际风险还要看策略绑定对象。
