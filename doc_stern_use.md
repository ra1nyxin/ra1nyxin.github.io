# stern 常用用法

stern 适合跟随多个 Pod 的日志。常用参数：标签选择器、namespace、尾随行数、颜色。

```bash
stern app
```

```bash
stern -n kube-system coredns
```

```bash
stern -l app=web
```

```bash
stern -n default app --tail 100
```

stern 比单个 `kubectl logs -f` 更适合看一组副本。比赛里服务抖动时，用它看多 Pod 日志很省时间。
