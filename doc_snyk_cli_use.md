# Snyk CLI 使用

Snyk CLI 可用于依赖、容器和 IaC 检查，适合和 Trivy、Grype、npm audit 这类工具互补。接入前先确认组织、项目和认证状态。

## 依赖检查

```bash
snyk test
```

```bash
snyk test --json > snyk.json
```

```bash
snyk test --severity-threshold=high
```

本地先跑普通输出，CI 里再输出 JSON 或设置阈值。多语言仓库要确认 Snyk 识别到的 manifest 是否完整。

## 容器和 IaC

```bash
snyk container test nginx:latest
```

```bash
snyk iac test .
```

```bash
snyk monitor --project-name app
```

容器结果要结合基础镜像、运行环境和是否可升级判断。IaC 结果重点看公开暴露、宽权限、未加密和日志缺失。

## 记录习惯

Snyk 结果和组织策略、项目语言、付费能力有关。报告里写清扫描时间、项目路径、manifest、镜像 tag 和阈值，后面复测才好对比。
