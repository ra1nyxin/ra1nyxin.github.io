# osv-scanner 使用

osv-scanner 适合检查开源依赖的已知漏洞，数据来自 OSV。它对 Go、npm、PyPI、Cargo 等生态比较顺手，适合放在本地检查和 CI 里。

## 基础扫描

```bash
osv-scanner -r .
```

```bash
osv-scanner --lockfile package-lock.json
```

```bash
osv-scanner --lockfile go.sum
```

## 输出和过滤

```bash
osv-scanner -r . --format json > osv.json
```

```bash
osv-scanner -r . --skip-git
```

```bash
osv-scanner -r . --config osv-scanner.toml
```

## 容器和 SBOM

```bash
osv-scanner --sbom sbom.spdx.json
```

```bash
osv-scanner --docker nginx:latest
```

osv-scanner 的结果适合和包管理器锁文件一起归档。修复时优先看 direct dependency，再处理传递依赖。
