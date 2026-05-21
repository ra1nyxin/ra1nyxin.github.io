# kubent 使用

kubent 用来检查 Kubernetes 资源里有没有已经废弃或即将废弃的 API。集群升级前很适合先跑一遍，尤其是老 Helm chart、历史遗留 CRD、长期没人维护的 namespace，最容易在这里露出问题。

## 起手检查

```bash
kubent
```

```bash
kubent --cluster
```

```bash
kubent --target-version 1.29.0
```

先用默认扫描看一眼全局，再按目标版本跑。`--target-version` 要和实际升级计划对齐，不然结果容易偏松或偏紧。

## Helm 资源

```bash
kubent --helm3
```

```bash
kubent --helm3 --target-version 1.29.0
```

Helm release 经常藏着旧 API，尤其是很久没升级过的监控、日志、Ingress 组件。扫出来以后，先定位 release 名和 chart 版本，再决定是改 values、升 chart，还是临时补 manifest。

## 输出留档

```bash
kubent -o json
```

```bash
kubent -o json > kubent-report.json
```

JSON 适合留进升级检查记录。结果里重点看 API 版本、资源名、namespace 和替代版本，别只看命中数量。

## 复核

kubent 的结果最好和 Pluto 交叉看一次。两边都命中的资源优先处理，只被单边命中的资源再回到集群里用 `kubectl get` 查实际对象。
