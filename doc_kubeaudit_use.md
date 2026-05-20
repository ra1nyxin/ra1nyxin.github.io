# kubeaudit 使用

kubeaudit 用于检查 Kubernetes manifest 和运行资源中的安全配置。

## 常用命令

```bash
kubeaudit all
```

```bash
kubeaudit all -f deployment.yaml
```

```bash
kubeaudit autofix -f deployment.yaml
```

```bash
kubeaudit all --minSeverity warning
```

```bash
kubeaudit all --format json > kubeaudit.json
```

重点看特权容器、root 用户、能力集、只读根文件系统和镜像标签。
