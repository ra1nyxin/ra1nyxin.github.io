# shhgit 使用

shhgit 用于扫描 Git 仓库里的潜在秘密泄露，也可以用于外部暴露面巡检。它适合找 token、私钥、连接串、云凭据这类容易被误提交的内容。

## 本地扫描

```bash
shhgit --local .
```

```bash
shhgit --config config.yaml
```

```bash
shhgit --output findings.json
```

本地仓库扫描适合放在提交前或 CI 里。命中后先确认是否真实 secret，再确认是否已经进入历史提交。

## 输出控制

```bash
shhgit --silent
```

```bash
shhgit --help
```

静默模式适合自动化流程，完整输出适合人工排查。报告里不要直接贴完整 secret，保留类型、文件路径、行号和脱敏片段就够。

## 处置

外部监控命中后优先吊销密钥，再查访问日志。单纯删除 GitHub 上的文件不能解决已经泄露的问题，历史提交和 fork 也要纳入处置范围。
