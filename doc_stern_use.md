# stern 常用用法

stern 适合跟随多个 Pod 的日志。服务有多副本、频繁重启或滚动发布时，它比单个 `kubectl logs -f` 更方便。

## 基础跟随

```bash
stern app
```

```bash
stern -n kube-system coredns
```

```bash
stern -n default app --tail 100
```

先按关键字或 namespace 看日志。`--tail` 可以避免一上来刷太多历史内容。

## 标签选择

```bash
stern -l app=web
```

```bash
stern -n default -l app=web --since 10m
```

标签选择器适合看一组副本。排查滚动发布问题时，加上 `--since` 会清爽很多。

## 习惯

比赛或应急里服务抖动时，用 stern 看多 Pod 日志很省时间。关键日志要复制到记录里，别只停留在交互终端。
