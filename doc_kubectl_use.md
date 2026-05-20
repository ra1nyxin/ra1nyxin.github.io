# kubectl 常用用法

这篇记录 kubectl 的常用命令。日常看 Pod、查日志、进容器、看事件、排查 Service 和 Deployment 都会用到。

## 查看资源

查看当前上下文。

```bash
kubectl config current-context
```

查看命名空间。

```bash
kubectl get ns
```

查看 Pod。

```bash
kubectl get pods -A
```

查看节点。

```bash
kubectl get nodes -o wide
```

查看 Service。

```bash
kubectl get svc -A
```

## 详细信息

查看 Pod 详情。

```bash
kubectl describe pod POD_NAME -n NAMESPACE
```

查看 Deployment 详情。

```bash
kubectl describe deploy DEPLOYMENT_NAME -n NAMESPACE
```

查看事件。

```bash
kubectl get events -A --sort-by=.lastTimestamp
```

查看资源 YAML。

```bash
kubectl get pod POD_NAME -n NAMESPACE -o yaml
```

## 日志和进入容器

查看日志。

```bash
kubectl logs POD_NAME -n NAMESPACE
```

跟随日志。

```bash
kubectl logs -f POD_NAME -n NAMESPACE
```

查看上一次崩溃日志。

```bash
kubectl logs POD_NAME -n NAMESPACE --previous
```

进入容器。

```bash
kubectl exec -it POD_NAME -n NAMESPACE -- sh
```

指定容器进入。

```bash
kubectl exec -it POD_NAME -c CONTAINER_NAME -n NAMESPACE -- sh
```

## rollout

查看发布状态。

```bash
kubectl rollout status deploy/DEPLOYMENT_NAME -n NAMESPACE
```

查看发布历史。

```bash
kubectl rollout history deploy/DEPLOYMENT_NAME -n NAMESPACE
```

回滚上一版。

```bash
kubectl rollout undo deploy/DEPLOYMENT_NAME -n NAMESPACE
```

重启 Deployment。

```bash
kubectl rollout restart deploy/DEPLOYMENT_NAME -n NAMESPACE
```

## 端口转发和调试

本地转发到 Pod。

```bash
kubectl port-forward pod/POD_NAME 8080:80 -n NAMESPACE
```

本地转发到 Service。

```bash
kubectl port-forward svc/SERVICE_NAME 8080:80 -n NAMESPACE
```

临时启动调试 Pod。

```bash
kubectl run debug-shell --rm -it --image=busybox:1.36 -- sh
```

## 备注

Kubernetes 排错先看事件，再看 Pod 状态、日志和探针。镜像拉不下来、配置挂载失败、探针失败、资源不足是最常见的几类入口。
