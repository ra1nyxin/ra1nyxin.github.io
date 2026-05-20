# kubetail 使用

kubetail 用于同时查看多个 Kubernetes Pod 日志，适合排查服务异常和安全事件。

## 常用命令

```bash
kubetail app
```

```bash
kubetail app -n default
```

```bash
kubetail app -c api
```

```bash
kubetail app --since 1h
```

```bash
kubetail app -l app=api
```

小记录：多 Pod 日志排查时很省时间，安全事件要同时记录 namespace、pod 和容器名。
