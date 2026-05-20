# Hadolint 使用

Hadolint 用于检查 Dockerfile 质量和安全问题，适合镜像构建前复核。

## 常用命令

```bash
hadolint Dockerfile
```

```bash
hadolint Dockerfile -f json
```

```bash
hadolint Dockerfile --ignore DL3008
```

```bash
hadolint Dockerfile --trusted-registry registry.local
```

```bash
find . -name Dockerfile -print -exec hadolint {} \;
```

重点看基础镜像、包版本固定、root 用户和层缓存里的敏感文件。
