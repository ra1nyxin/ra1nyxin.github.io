# Trivy 配置扫描

Trivy 除了扫镜像漏洞，也能扫 IaC、Kubernetes manifest、Terraform 和 secret。它适合把配置风险纳入同一套流水线。

## 文件系统扫描

```bash
trivy fs .
```

```bash
trivy fs --scanners vuln,secret,misconfig .
```

```bash
trivy fs --format json --output trivy.json .
```

## IaC 和 K8s

```bash
trivy config ./k8s
```

```bash
trivy config ./terraform
```

```bash
trivy k8s --report summary cluster
```

## 门禁

```bash
trivy fs --severity HIGH,CRITICAL --exit-code 1 .
```

小记录：Trivy 结果要按漏洞、secret、misconfig 分开处理。配置问题通常能直接修，第三方漏洞需要结合镜像来源和可修复版本。
