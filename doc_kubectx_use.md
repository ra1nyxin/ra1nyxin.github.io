# kubectx 和 kubens 常用用法

kubectx、kubens 用来快速切换 Kubernetes context 和 namespace。多集群环境里很省事，但也容易因为切错上下文把命令发到错误集群。

## Context

```bash
kubectx
```

```bash
kubectx dev-cluster
```

```bash
kubectl config current-context
```

切换前后都建议看一眼当前 context。生产、测试、个人实验集群都在同一个 kubeconfig 里时，这一步很重要。

## Namespace

```bash
kubens
```

```bash
kubens kube-system
```

```bash
kubectl config view --minify --output 'jsonpath={..namespace}'
```

namespace 切换只影响默认命名空间，cluster-wide 资源不受影响。排查时如果结果为空，先确认是不是 namespace 看错了。

## 习惯

执行删除、扩缩容、改配置这类命令前，先跑 `kubectl config current-context`。这比事后补救省事得多。
