# k9s 常用用法

k9s 适合在终端里快速查看和管理 Kubernetes。它是交互式工具，适合排查 Pod、Deployment、Service、ConfigMap、Secret 和日志。

## 启动

```bash
k9s
```

```bash
k9s -n kube-system
```

```bash
k9s --context prod
```

启动前先确认 kubeconfig 当前上下文。生产和测试集群都在一个配置里时，别只靠默认 context。

## 直接进入资源视图

```bash
k9s -c pod
```

```bash
k9s -c deploy
```

```bash
k9s -c svc -n default
```

直接指定资源类型能省很多切换时间。比赛或应急里，先看 Pod 状态、重启次数、镜像、环境变量和事件。

## 排查习惯

k9s 很适合看日志和事件，但关键结论最好再用 `kubectl` 命令复核。交互界面适合快速定位，报告和留档还是命令输出更稳定。
