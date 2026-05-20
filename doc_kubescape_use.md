# Kubescape 常用用法

Kubescape 适合 Kubernetes 集群和 manifest 安全扫描。常用参数：输入文件、输出格式、控制台报告。

```bash
kubescape scan framework nsa --verbose
```

```bash
kubescape scan file deployment.yaml
```

```bash
kubescape scan cluster --format json
```

```bash
kubescape scan file *.yaml --output-format html
```

Kubescape 适合比赛里做 Kubernetes 基线检查。先看高风险工作负载，再看 RBAC、镜像和挂载。
