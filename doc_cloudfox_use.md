# CloudFox 使用

CloudFox 用于 AWS 云环境枚举，适合授权评估中快速发现攻击面、身份权限和高价值资源线索。跑之前先确认当前凭据、账号和 region，避免把不同环境混在一起。

## 起手确认

```bash
cloudfox aws whoami
```

```bash
cloudfox aws inventory
```

```bash
aws sts get-caller-identity
```

先跑 `whoami` 和 `inventory`，确认账号、身份和可见服务范围。AWS profile 切换频繁时，额外跑一次 STS 会更稳。

## 重点模块

```bash
cloudfox aws permissions
```

```bash
cloudfox aws instances
```

```bash
cloudfox aws buckets
```

权限、实例、存储桶通常先看。权限模块适合找高价值身份，实例模块看暴露面和登录线索，桶模块看公开访问和敏感命名。

## 留档习惯

CloudFox 输出目录按账号和时间保存。报告里写清 profile、region、账号 ID 和模块名，后面复核时不用重新猜当时扫的是哪个环境。
