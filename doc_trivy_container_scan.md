# Trivy 容器镜像扫描笔记

Trivy 适合做容器镜像、文件系统、Git 仓库和 IaC 配置的安全基线。它上手很快，但真正落地时要把扫描位置、失败阈值、忽略规则和修复责任设计清楚。否则报告每天都变，团队最后只会习惯性忽略。

扫描镜像是最常见用法。镜像可以是本地已有镜像，也可以是远端 registry 上的镜像。

```bash
trivy image nginx:latest
trivy image registry.example.com/team/app:1.2.3
```

第一轮看全量，后续 CI 里通常只关注 HIGH 和 CRITICAL。`--ignore-unfixed` 适合先看当前有修复版本的漏洞，但不要把它当成永久豁免，未修复漏洞同样需要记录和复查。

```bash
trivy image --severity HIGH,CRITICAL nginx:latest
trivy image --severity HIGH,CRITICAL --ignore-unfixed nginx:latest
```

报告里要看漏洞来自哪里。基础镜像系统包、语言依赖、应用打包进来的二进制，修复路径完全不同。依赖树能帮助定位来源。

```bash
trivy image --dependency-tree registry.example.com/team/app:1.2.3
```

输出格式按用途选。人看用 table，流水线留档用 JSON，接 GitHub Security 或代码扫描平台用 SARIF。

```bash
trivy image -f table -o trivy-report.txt nginx:latest
trivy image -f json -o trivy-report.json nginx:latest
trivy image -f sarif -o trivy-report.sarif nginx:latest
```

CI 阻断要谨慎设置。刚接入时可以先只阻断 CRITICAL，等基础镜像和依赖治理稳定后，再把 HIGH 纳入门槛。否则老项目第一次接入会直接把流水线打爆。

```bash
trivy image --severity CRITICAL --exit-code 1 registry.example.com/team/app:1.2.3
trivy image --severity HIGH,CRITICAL --exit-code 1 registry.example.com/team/app:1.2.3
```

扫描文件系统适合在构建前检查源码目录、依赖锁文件、Dockerfile、Kubernetes YAML 和 Terraform。多 scanner 一起开时，报告会更大，但能把 secret、misconfig 和 vuln 放在一次结果里。

```bash
trivy fs .
trivy fs --scanners vuln,secret,misconfig .
```

扫描 Git 仓库可以直接给 URL，适合快速看开源项目或外部依赖。

```bash
trivy repo https://github.com/aquasecurity/trivy
```

数据库缓存会影响速度和稳定性。CI 里可以缓存 Trivy DB，离线环境可以提前下载。`--skip-db-update` 只适合数据库已经准备好的环境，不要在长期流水线里无脑跳过更新。

```bash
trivy image --download-db-only
trivy image --skip-db-update nginx:latest
trivy clean --all
```

忽略规则要可审计。简单 `.trivyignore` 能快速跳过某个 CVE，但长期维护更推荐带说明和过期时间的 YAML。每条忽略都应该有原因、负责人和复查日期。

```bash
trivy image --ignorefile .trivyignore nginx:latest
trivy image --ignorefile .trivyignore.yaml nginx:latest
```

一个简单的 `.trivyignore.yaml` 可以这样写：

```yaml
vulnerabilities:
  - id: CVE-2024-0000
    statement: "Vendor package, no fixed version yet. Isolated by runtime policy."
    expired_at: 2026-09-30
```

容器镜像修复一般从三条线下手。第一是换基础镜像或升级 tag，比如从旧 Debian/Alpine 切到有维护的版本。第二是升级语言依赖，配合 lockfile 管理。第三是减少镜像里不需要的工具和包，运行时镜像越小，暴露面越小。

多阶段构建能减少最终镜像内容。Trivy 报告里如果出现编译工具、包管理器缓存、测试依赖，就要考虑是不是把 build stage 的东西带进 runtime 了。

```dockerfile
FROM golang:1.22 AS build
WORKDIR /src
COPY . .
RUN go build -o app ./cmd/app

FROM gcr.io/distroless/base-debian12
COPY --from=build /src/app /app
USER nonroot
ENTRYPOINT ["/app"]
```

我更喜欢把 Trivy 放在两个位置：开发分支上生成报告但不阻断，主分支或发布前按严重级别阻断。这样既能让问题尽早可见，又不会让历史债务一次性压垮流水线。报告处理时优先看可修复的 Critical/High、互联网暴露服务、带可利用条件的漏洞和基础镜像批量问题。
