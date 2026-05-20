# Pluto 使用

Pluto 用于检查 Kubernetes 已弃用 API，适合升级前评估。

## 常用命令

```bash
pluto detect-files -d k8s
```

```bash
pluto detect-helm -owide
```

```bash
pluto detect-api-resources
```

```bash
pluto detect-files -d . -o json
```

```bash
helm template app ./chart | pluto detect -
```

小记录：升级 Kubernetes 前先跑一遍，可以提前发现会在新版本失效的 manifest。
