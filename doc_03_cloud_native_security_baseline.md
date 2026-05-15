# Cloud Native Security Baseline

云原生安全基线的目标不是把所有功能都关掉，而是建立一个默认安全、可观测、可审计、可恢复的运行环境。

## 1. 基线分层

| 层级 | 目标 |
| --- | --- |
| Identity | 谁能访问什么 |
| Network | 服务如何互通 |
| Workload | 容器和进程如何运行 |
| Image | 运行内容是否可信 |
| Secrets | 密钥如何保存和使用 |
| Observability | 发生了什么能否看见 |
| Recovery | 出事后能否恢复 |

## 2. 身份与权限

云原生环境里，身份比网络边界更重要。

建议：

- 默认禁止长期 Access Key。
- 使用短期凭证和 workload identity。
- 禁止默认 service account 自动挂载 token。
- Kubernetes RBAC 按 namespace 和动作拆分。
- 人和机器身份分离。
- 高危权限必须有审批和审计。

Kubernetes 示例：

```yaml
automountServiceAccountToken: false
```

只在确实需要访问 API Server 的 workload 中开启。

## 3. Network Policy

默认假设集群内部网络不可信。

基线：

- 默认拒绝 namespace 内入站流量。
- 默认拒绝跨 namespace 横向访问。
- 明确允许服务到服务的必要路径。
- 出站访问也应限制，尤其是访问公网。

策略模型：

```text
default deny
allow app -> database
allow app -> required external API
deny app -> metadata service
```

## 4. Pod Security

容器默认不应该拥有宿主机级能力。

推荐约束：

```yaml
securityContext:
  runAsNonRoot: true
  readOnlyRootFilesystem: true
  allowPrivilegeEscalation: false
  capabilities:
    drop:
      - ALL
```

禁止或强审：

- privileged 容器
- hostNetwork
- hostPID
- hostPath
- Docker socket 挂载
- SYS_ADMIN capability

## 5. 镜像基线

镜像安全要关注来源、内容和运行方式。

要求：

- 镜像来源可信。
- 使用 digest 固定版本。
- 扫描 OS 包和语言依赖。
- 不包含构建工具和调试工具。
- 不包含密钥。
- 镜像签名并在部署前验证。

## 6. Admission Control

不要依赖人工记忆来遵守基线。

Admission policy 可以阻止：

- 未签名镜像。
- latest tag。
- privileged 容器。
- root 用户运行。
- 缺失 resource limits。
- 直接暴露 NodePort。
- 挂载敏感 hostPath。

策略应该灰度上线：

1. Audit 模式。
2. Warn 模式。
3. Enforce 模式。

## 7. Secrets 管理

Kubernetes Secret 不是完整密钥管理系统。

建议：

- 使用外部 KMS 或 Secret Manager。
- etcd 加密。
- Secret 最小范围挂载。
- 不把 Secret 写入环境变量日志。
- 定期轮换。
- 禁止 Secret 出现在镜像、ConfigMap、日志中。

## 8. 运行时检测

运行时至少应该能发现：

- 容器逃逸相关行为。
- 异常 shell。
- 敏感文件访问。
- 异常网络连接。
- 新增可执行文件。
- 异常 capability 使用。
- 访问云 metadata service。

检测逻辑要绑定 workload、namespace、image digest 和 service account。

## 9. 日志与审计

必须采集：

| 日志 | 用途 |
| --- | --- |
| Kubernetes audit log | API 操作审计 |
| Cloud control plane log | 云资源变更 |
| Container stdout/stderr | 应用事件 |
| Runtime security events | 可疑行为 |
| Ingress / service mesh logs | 访问路径 |
| CI/CD deployment logs | 发布追溯 |

日志必须包含时间、身份、资源、动作、结果。

## 10. 资源限制

没有资源限制的 workload 容易造成稳定性和安全问题。

建议：

```yaml
resources:
  requests:
    cpu: 100m
    memory: 128Mi
  limits:
    cpu: 500m
    memory: 512Mi
```

同时启用：

- LimitRange
- ResourceQuota
- HPA / VPA 策略

## 11. 多租户隔离

隔离维度：

- namespace
- node pool
- network policy
- RBAC
- runtime class
- image registry
- secret scope

高风险 workload 不应和核心服务共享 node pool。

## 12. 备份与恢复

恢复能力是安全基线的一部分。

要求：

- etcd 备份。
- 关键数据库备份。
- IaC 可重建环境。
- 镜像和 Helm chart 可追溯。
- 定期恢复演练。

## 13. 最小可执行基线

如果只能先做一版，建议至少落地：

1. 禁止 privileged。
2. 禁止 root。
3. 禁止 latest tag。
4. 镜像扫描。
5. RBAC 最小权限。
6. NetworkPolicy default deny。
7. 审计日志采集。
8. Secret 外部化。
9. 资源限制。
10. 备份恢复演练。

## 14. 核心原则

云原生安全不是给集群套一层扫描器，而是把安全约束变成默认行为。

安全基线的成功标志：

- 不安全配置默认进不来。
- 关键行为能看见。
- 事故范围能限制。
- 环境能重建。
