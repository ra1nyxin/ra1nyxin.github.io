# CloudFox 使用

CloudFox 用于 AWS 云环境枚举，适合授权评估中快速发现攻击面和权限线索。

## 常用命令

```bash
cloudfox aws whoami
```

```bash
cloudfox aws inventory
```

```bash
cloudfox aws permissions
```

```bash
cloudfox aws instances
```

```bash
cloudfox aws buckets
```

小记录：先跑 whoami 和 inventory，确认账号与 region 后再看高价值模块。
