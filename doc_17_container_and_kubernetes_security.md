# Container and Kubernetes Security

容器安全不能只看镜像漏洞。真实风险来自镜像、构建链、运行时权限、Kubernetes 控制面、网络策略、密钥、准入控制和集群运维方式的组合。

## 1. 镜像基线

镜像要求：

- 使用可信基础镜像。
- 固定版本，不使用漂移标签。
- 构建后扫描漏洞和 secret。
- 最小化包和调试工具。
- 非 root 用户运行。
- 产物签名并记录来源。

镜像越小，攻击面和修复成本通常越低。

## 2. 构建链安全

CI/CD 是容器供应链的关键入口。

| 控制 | 说明 |
| --- | --- |
| Build provenance | 记录谁、何时、从哪个 commit 构建 |
| Dependency lock | 依赖版本可复现 |
| Secret scanning | 防止凭证进入镜像 |
| Artifact signing | 防止产物被替换 |
| Registry access | 推拉权限最小化 |
| Promotion flow | 测试到生产有明确门禁 |

生产镜像应来自受控流水线，开发者本地构建后手动推送会破坏可追溯性。

## 3. Pod 安全

关键配置：

- `runAsNonRoot`。
- 禁用 privileged。
- 禁止挂载宿主机敏感路径。
- 只授予必要 capabilities。
- 设置 readOnlyRootFilesystem。
- 配置 resource requests 和 limits。
- 使用 seccomp 或 AppArmor 配置。

默认允许的集群，最终会变成每个 workload 自己承担安全设计。

## 4. Kubernetes RBAC

RBAC 常见问题：

- 过度使用 cluster-admin。
- service account 权限长期未复核。
- 默认 service account 被滥用。
- CI/CD token 可直接管理生产。
- namespace 边界被误认为强隔离。

建议对高权限 RBAC 变更做告警，并定期查找未使用权限。

## 5. 准入控制

准入控制适合把安全要求变成默认门禁。

可检查：

- 镜像来源是否可信。
- 是否使用 latest 标签。
- 是否 root 运行。
- 是否 privileged。
- 是否声明资源限制。
- 是否挂载 hostPath。
- 是否引用未批准 secret。

准入策略要先 dry-run，再逐步 enforcing，避免影响业务发布。

## 6. 网络策略

默认允许东西向流量会扩大横向移动风险。

建议：

- namespace 默认 deny。
- 明确允许服务到服务访问。
- 数据库只允许指定 workload 访问。
- 管理面 API 访问受限。
- egress 访问按域名或网段控制。

网络策略要和服务拓扑一起维护，否则会快速过期。

## 7. 密钥管理

Kubernetes secret 默认只解决基础存放问题，完整密钥管理还需要轮换、审计和外部 KMS。

要求：

- etcd 加密。
- secret 访问有 RBAC 限制。
- 避免把长期云密钥放入 secret。
- 优先使用 workload identity。
- secret 读取和变更进入审计。
- 轮换流程自动化。

密钥泄露后，要能快速知道哪些 workload 使用过它。

## 8. 运行时检测

优先检测：

- 容器内启动 shell 或包管理器。
- 容器访问宿主机路径。
- workload 调用 Kubernetes API 异常增加。
- 新建高权限 service account。
- 镜像与已批准 digest 不一致。
- 容器发起异常外联。

运行时检测需要把 pod、namespace、node、image digest 和 owner 关联起来。

## 9. 度量指标

| 指标 | 目标 |
| --- | --- |
| 非 root workload 比例 | 持续提升 |
| privileged pod 数量 | 接近 0 |
| 镜像签名覆盖率 | 生产 100% |
| 高危漏洞超期镜像 | 接近 0 |
| cluster-admin 主体数量 | 极少且可解释 |
| 网络策略覆盖率 | 关键 namespace 100% |

容器安全的重点是把安全约束嵌入构建和调度路径，减少上线后人工追问题的成本。
