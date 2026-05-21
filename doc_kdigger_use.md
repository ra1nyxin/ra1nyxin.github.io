# kdigger 使用

kdigger 用于枚举 Kubernetes Pod 内能看到的集群环境、容器运行时和节点线索。它适合授权测试里确认当前容器的可见范围。

## 本地运行

```bash
kdigger
```

```bash
kdigger dig
```

```bash
kdigger -o json
```

默认输出适合人工看，JSON 适合留档。先看 ServiceAccount、namespace、DNS、挂载路径、容器运行时线索，再判断后面要不要深入。

## 临时 Pod

```bash
kubectl run kdigger --rm -it --image=quay.io/inguardians/kdigger
```

```bash
kubectl run kdigger --rm -it --restart=Never --image=quay.io/inguardians/kdigger -- kdigger dig
```

临时 Pod 适合在测试 namespace 里确认默认权限。跑之前要明确 namespace 和当前 context，避免把测试 Pod 起到错误环境。

## 版本和记录

```bash
kdigger version
```

记录工具版本、运行 namespace、ServiceAccount、镜像和关键发现。Pod 内枚举结果和部署方式关系很大，复盘时这些条件很关键。
