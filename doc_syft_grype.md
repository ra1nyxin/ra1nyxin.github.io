# Syft 和 Grype 常用用法

这篇记录 Syft 和 Grype 的常用命令。Syft 负责生成 SBOM，Grype 负责基于 SBOM 或镜像做漏洞扫描，两个工具放在一起用很顺。

## Syft 生成 SBOM

扫描容器镜像。

```bash
syft nginx:latest
```

输出 CycloneDX JSON。

```bash
syft nginx:latest -o cyclonedx-json=sbom.cdx.json
```

输出 SPDX JSON。

```bash
syft nginx:latest -o spdx-json=sbom.spdx.json
```

扫描当前目录。

```bash
syft dir:.
```

扫描文件系统并输出 JSON。

```bash
syft dir:. -o json=sbom.json
```

## Grype 扫描

扫描镜像漏洞。

```bash
grype nginx:latest
```

扫描目录。

```bash
grype dir:.
```

扫描 Syft 生成的 SBOM。

```bash
grype sbom:sbom.cdx.json
```

只显示高危和严重。

```bash
grype nginx:latest --only-fixed --fail-on high
```

## 输出报告

输出 JSON。

```bash
grype nginx:latest -o json > grype-report.json
```

输出表格。

```bash
grype nginx:latest -o table
```

输出 SARIF。

```bash
grype nginx:latest -o sarif > grype-report.sarif
```

## CI 常用

发现高危及以上时失败。

```bash
grype nginx:latest --fail-on high
```

先生成 SBOM 再扫描。

```bash
syft nginx:latest -o cyclonedx-json=sbom.cdx.json
```

```bash
grype sbom:sbom.cdx.json --fail-on high
```

## 备注

Syft 适合把组件清单固化下来，Grype 适合跟着漏洞库反复评估同一份清单。发布流程里保留 SBOM 文件，后面回溯某个漏洞影响范围会轻松很多。
