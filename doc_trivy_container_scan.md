# Trivy 容器镜像扫描

这篇记录 Trivy 扫描容器镜像时常用的命令。它适合做镜像漏洞基线、依赖风险检查和 CI 里的最低安全门槛。

## 扫描镜像

扫描本地或远端镜像。

```bash
trivy image nginx:latest
```

只看 HIGH 和 CRITICAL。

```bash
trivy image --severity HIGH,CRITICAL nginx:latest
```

忽略未修复漏洞，适合先看当前能处理的部分。

```bash
trivy image --ignore-unfixed nginx:latest
```

扫描时显示依赖来源。

```bash
trivy image --dependency-tree nginx:latest
```

## 输出报告

输出 JSON。

```bash
trivy image -f json -o trivy-report.json nginx:latest
```

输出表格到文本。

```bash
trivy image -f table -o trivy-report.txt nginx:latest
```

输出 SARIF，适合接入 GitHub Security。

```bash
trivy image -f sarif -o trivy-report.sarif nginx:latest
```

## 扫描文件系统和仓库

扫描当前目录。

```bash
trivy fs .
```

扫描当前目录里的依赖和配置问题。

```bash
trivy fs --scanners vuln,secret,misconfig .
```

扫描 Git 仓库地址。

```bash
trivy repo https://github.com/aquasecurity/trivy
```

## CI 里常用的失败条件

发现 HIGH 或 CRITICAL 时返回非零退出码。

```bash
trivy image --severity HIGH,CRITICAL --exit-code 1 nginx:latest
```

只把 CRITICAL 作为阻断条件。

```bash
trivy image --severity CRITICAL --exit-code 1 nginx:latest
```

先输出报告，再由流水线保存产物。

```bash
trivy image --severity HIGH,CRITICAL -f json -o trivy-report.json nginx:latest
```

## 缓存和数据库

下载漏洞数据库。

```bash
trivy image --download-db-only
```

跳过数据库更新，适合离线或固定环境。

```bash
trivy image --skip-db-update nginx:latest
```

清理缓存。

```bash
trivy clean --all
```

## 忽略规则

项目根目录可以放 `.trivyignore`，每行写一个需要暂时忽略的漏洞编号。

```bash
trivy image --ignorefile .trivyignore nginx:latest
```

带过期时间的忽略规则更容易维护。

```bash
trivy image --ignorefile .trivyignore.yaml nginx:latest
```

## 小记录

Trivy 适合放在镜像构建后、发布前的位置。报告里要优先看基础镜像、系统包、语言依赖这三类来源，修复动作通常也从这三条线展开。遇到第三方闭源组件时，记录版本、影响范围、隔离措施和复查时间会更清楚。
