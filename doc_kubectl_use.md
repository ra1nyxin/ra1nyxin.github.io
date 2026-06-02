# kubectl 使用笔记

`kubectl` 是 Kubernetes 排障时最常用的入口。它不只是“看 Pod 列表”的工具，真正高效的用法是把资源状态、事件、日志、YAML、rollout 和临时调试串起来。动手改资源前，先确认 context 和 namespace，很多事故都来自打错集群或命名空间。

先看当前上下文和默认命名空间。

```bash
kubectl config current-context
kubectl config get-contexts
kubectl config view --minify
```

资源列表尽量带 `-o wide`，可以直接看到节点、IP、镜像等信息。跨 namespace 排查时用 `-A`。

```bash
kubectl get ns
kubectl get nodes -o wide
kubectl get pods -A -o wide
kubectl get svc -A
kubectl get ingress -A
```

Pod 不正常时，先看状态和事件，再看日志。`describe` 里的 Events 往往比容器日志更早暴露问题，比如镜像拉取失败、探针失败、调度失败、挂载失败。

```bash
kubectl describe pod POD_NAME -n NAMESPACE
kubectl get events -n NAMESPACE --sort-by=.lastTimestamp
kubectl get events -A --sort-by=.lastTimestamp
```

日志按场景选参数。多容器 Pod 要指定 `-c`，崩溃重启要看 `--previous`，长日志用 `--since` 缩小范围。

```bash
kubectl logs POD_NAME -n NAMESPACE
kubectl logs POD_NAME -c CONTAINER_NAME -n NAMESPACE
kubectl logs POD_NAME -n NAMESPACE --previous
kubectl logs -f POD_NAME -n NAMESPACE --since=10m
```

进入容器时，不要默认一定有 bash。很多镜像只有 sh，甚至 distroless 镜像没有 shell。能进容器只是调试手段，不应该成为长期运维方式。

```bash
kubectl exec -it POD_NAME -n NAMESPACE -- sh
kubectl exec -it POD_NAME -c CONTAINER_NAME -n NAMESPACE -- sh
```

看资源 YAML 能确认最终生效状态。排查 ConfigMap、Secret、探针、资源限制、nodeSelector、tolerations 时，YAML 比 describe 更完整。

```bash
kubectl get pod POD_NAME -n NAMESPACE -o yaml
kubectl get deploy DEPLOYMENT_NAME -n NAMESPACE -o yaml
kubectl get cm CONFIG_NAME -n NAMESPACE -o yaml
```

Deployment 发布问题用 rollout 看。`rollout status` 能确认是否卡住，`history` 能看版本，必要时回滚。生产环境回滚前先保存当前状态和事件，方便事后分析。

```bash
kubectl rollout status deploy/DEPLOYMENT_NAME -n NAMESPACE
kubectl rollout history deploy/DEPLOYMENT_NAME -n NAMESPACE
kubectl rollout undo deploy/DEPLOYMENT_NAME -n NAMESPACE
kubectl rollout restart deploy/DEPLOYMENT_NAME -n NAMESPACE
```

Service 排障要同时看 Service、EndpointSlice 和 Pod label。Service 没 endpoint 时，通常是 selector 对不上，或者 Pod 没 ready。

```bash
kubectl describe svc SERVICE_NAME -n NAMESPACE
kubectl get endpoints SERVICE_NAME -n NAMESPACE -o wide
kubectl get endpointslice -n NAMESPACE
kubectl get pod -n NAMESPACE --show-labels
```

端口转发适合临时验证服务，不代表集群内网络一定正常。它绕过了 Ingress、Service 负载均衡和部分网络路径。

```bash
kubectl port-forward pod/POD_NAME 8080:80 -n NAMESPACE
kubectl port-forward svc/SERVICE_NAME 8080:80 -n NAMESPACE
```

临时调试 Pod 可以用 busybox、curlimages、nicolaka/netshoot 这类镜像。生产集群要遵守镜像准入和命名空间权限，不要随便在系统 namespace 起调试容器。

```bash
kubectl run debug-shell --rm -it --image=busybox:1.36 -- sh
kubectl run netshoot --rm -it --image=nicolaka/netshoot -- bash
```

修改资源前建议先用 server-side dry run 看 API 是否接受，再 apply。临时编辑可以用 `kubectl edit`，但长期配置应该回到 Git 或 Helm/Kustomize 源头。

```bash
kubectl apply --server-side --dry-run=server -f deploy.yaml
kubectl apply -f deploy.yaml
kubectl diff -f deploy.yaml
```

我的排障顺序是：确认 context，查 Pod 状态，看 events，看 logs，看 YAML，查 Service endpoints，再做 port-forward 或 debug Pod。这个顺序能覆盖大多数 CrashLoopBackOff、ImagePullBackOff、探针失败、配置挂载失败和 Service 无流量问题。
