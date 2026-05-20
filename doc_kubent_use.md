# kubent 使用

kubent 用于检测集群或 Helm release 中的废弃 Kubernetes API。

## 常用命令

```bash
kubent
```

```bash
kubent -o json
```

```bash
kubent --cluster
```

```bash
kubent --helm3
```

```bash
kubent --target-version 1.29.0
```

小记录：适合升级前排雷，和 Pluto 交叉检查能减少漏项。
