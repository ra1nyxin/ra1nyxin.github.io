# Popeye 使用

Popeye 用于巡检 Kubernetes 集群资源，适合发现配置异常、资源质量问题和一些安全相关的粗糙配置。它适合日常体检，也适合升级或交付前做一次基线扫。

## 扫描范围

```bash
popeye
```

```bash
popeye -n default
```

```bash
popeye -A
```

先扫当前 namespace，再按需要扩到全集群。全量扫描结果会比较多，最好按 namespace 或应用分批看。

## 输出和上下文

```bash
popeye -o json > popeye.json
```

```bash
popeye --context mycluster
```

```bash
popeye -A -o junit > popeye.xml
```

JSON 适合留档，JUnit 适合接 CI。多集群环境里一定显式指定 context，避免扫错集群。

## 看结果

安全相关重点看权限、镜像标签、资源限制、探针、暴露服务、hostPath 和特权容器。Popeye 的评分适合排序，最终是否修复还要结合业务用途判断。
