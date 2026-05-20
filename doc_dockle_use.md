# Dockle 使用

Dockle 用于检查容器镜像的安全基线，适合交付前做镜像配置复核。

## 常用命令

```bash
dockle nginx:latest
```

```bash
dockle --format json --output dockle.json nginx:latest
```

```bash
dockle --exit-code 1 --exit-level FATAL nginx:latest
```

```bash
dockle --ignore CIS-DI-0001 nginx:latest
```

```bash
dockle registry.local/app:1.0
```

小记录：它关注镜像配置和最佳实践，漏洞扫描需要再配合 Trivy 或 Grype。
