# kubetail 使用

kubetail 用于同时查看多个 Kubernetes Pod 日志。服务有多副本、滚动发布或异常重启时，它比单个 `kubectl logs` 更适合看整体行为。

## 基础跟随

```bash
kubetail app
```

```bash
kubetail app -n default
```

```bash
kubetail app --since 1h
```

先按应用名和 namespace 缩小范围，`--since` 可以避免刷出太多历史日志。

## 容器和标签

```bash
kubetail app -c api
```

```bash
kubetail app -l app=api
```

```bash
kubetail app -n default -c api --since 10m
```

多容器 Pod 要指定容器名，标签选择适合看一组副本。日志里出现异常时，同时记录 namespace、pod、容器名和时间点。

## 使用习惯

安全事件排查里，kubetail 适合快速定位异常请求、重启和错误堆栈。关键片段要单独保存，交互终端滚过去以后很难完整复盘。
