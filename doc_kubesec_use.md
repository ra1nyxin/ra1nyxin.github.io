# kubesec 常用用法

kubesec 适合 Kubernetes YAML 安全检查。常用参数：输入清单、JSON 输出、评分。

```bash
kubesec scan deployment.yaml
```

```bash
kubesec scan deployment.yaml --format json
```

```bash
kubesec scan deployment.yaml --threshold 5
```

```bash
kubesec scan *.yaml
```

kubesec 适合在比赛里快速检查高风险 manifest。重点看特权容器、挂载、capabilities 和镜像来源。
