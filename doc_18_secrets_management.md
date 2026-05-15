# Secrets Management

Secret 是系统之间建立信任的凭证，包括 API token、数据库密码、私钥、OAuth secret、Webhook secret、云访问密钥和证书。密钥管理失败会直接把局部问题放大成全局访问问题。

## 1. Secret 生命周期

| 阶段 | 控制 |
| --- | --- |
| Creation | 由可信系统生成，强随机 |
| Storage | 使用专用密钥管理系统 |
| Distribution | 最小范围分发 |
| Use | 运行时读取，避免落盘 |
| Rotation | 定期和事件触发轮换 |
| Revocation | 泄露后快速撤销 |
| Audit | 记录读取、变更和删除 |

不要把 secret 当成配置项。它需要完整生命周期。

## 2. 禁止模式

应避免：

- 把 secret 写进代码仓库。
- 把 secret 写进镜像。
- 在日志里打印 secret。
- 在工单和聊天工具里传 secret。
- 多个服务共享同一个长期 secret。
- 离职人员仍能访问历史 secret。

这些问题一旦发生，后续追踪影响范围会非常困难。

## 3. 存储策略

| 场景 | 建议 |
| --- | --- |
| 应用运行时 | Secret manager 或 workload identity |
| CI/CD | 平台内置 secret store，按环境隔离 |
| 本地开发 | 独立开发凭证，权限低且可轮换 |
| 证书私钥 | KMS/HSM 或受控证书平台 |
| 第三方 API | 独立 token，限制 scope |

生产 secret 不应该出现在开发者本地机器上。

## 4. 权限控制

secret 读取权限应按用途授予：

```text
service A can read secret A
service B cannot read secret A
operator can rotate secret A
auditor can view metadata but not value
```

读取 secret value 是高风险动作，应有审计和告警。

## 5. 轮换设计

轮换要可执行：

- 支持双 secret 过渡。
- 应用能热加载或平滑重启。
- 下游系统支持旧凭证撤销。
- 轮换失败能回滚。
- 轮换事件有 owner 和记录。

没有自动化轮换的 secret，最终会变成长期凭证。

## 6. 泄露响应

发现 secret 泄露后：

1. 立即确认 secret 类型和权限范围。
2. 禁用或轮换凭证。
3. 查询最近使用记录。
4. 查找是否有异常调用。
5. 更新依赖服务。
6. 修复泄露路径。
7. 增加检测或预防控制。

不要只从代码里删除 secret。历史提交、镜像层、日志和备份也可能仍然保留。

## 7. 检测场景

优先检测：

- 代码仓库出现 secret 模式。
- CI 日志出现 token 或私钥格式。
- secret 被非预期主体读取。
- 长期未使用 secret 突然使用。
- 新建高权限 API token。
- token 从异常地区调用。

secret 检测要降低误报，同时对高置信命中快速阻断。

## 8. Workload Identity

能不用长期 secret 时，优先使用 workload identity。

优势：

- 凭证短期有效。
- 与运行环境绑定。
- 权限更容易按 workload 管理。
- 泄露窗口更短。
- 审计上下文更清晰。

长期静态密钥应该逐步减少，特别是云访问密钥和生产数据库密码。

## 9. 指标

| 指标 | 目标 |
| --- | --- |
| 仓库 secret 命中 | 0 个未处理 |
| 长期云密钥数量 | 持续下降 |
| secret owner 覆盖率 | 100% |
| 自动轮换覆盖率 | 持续提升 |
| secret 读取异常 | 可调查 |
| 生产 secret 本地暴露 | 0 |

密钥管理的目标是让凭证短命、可控、可追踪，泄露后影响范围可收敛。
