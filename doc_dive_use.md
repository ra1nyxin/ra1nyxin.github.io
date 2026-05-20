# dive 使用

dive 用于查看容器镜像层、文件变化和空间浪费，适合排查镜像里残留的敏感文件。

## 常用命令

```bash
dive nginx:latest
```

```bash
dive registry.local/app:1.0
```

```bash
dive --ci app:latest
```

```bash
dive --json dive.json app:latest
```

```bash
CI=true dive app:latest
```

小记录：安全检查时重点看删除过但仍在底层层里的密钥、包缓存和构建产物。
