# Security Automation and SOAR

安全自动化的目标不是把所有判断交给脚本，而是把重复、低风险、证据明确的动作标准化，让分析人员把时间用于真正需要判断的地方。

## 1. 适合自动化的任务

| 类型 | 示例 |
| --- | --- |
| Enrichment | 查询资产 owner、用户信息、威胁情报 |
| Deduplication | 合并重复告警 |
| Routing | 按业务线分派工单 |
| Containment | 隔离主机、撤销 token |
| Notification | 通知 owner 或值班人员 |
| Evidence collection | 拉取日志、快照、EDR triage 包 |

自动化应从低风险、高频动作开始。

## 2. 不适合直接自动化的任务

谨慎处理：

- 删除生产数据。
- 大范围阻断网络。
- 禁用关键业务账号。
- 修改生产权限模型。
- 对外通知安全事件。
- 无证据情况下清理系统。

这些动作可以半自动化，保留人工确认。

## 3. Playbook 结构

一个 playbook 应包含：

```text
trigger
preconditions
data sources
decision logic
actions
approval gates
rollback
audit log
owner
test cases
```

没有 rollback 和审计的自动化，风险会比人工操作更高。

## 4. 分级响应

| 置信度 | 动作 |
| --- | --- |
| Low | 富化信息，创建低优先级工单 |
| Medium | 通知 owner，收集更多证据 |
| High | 执行低风险遏制动作 |
| Critical | 自动遏制并升级人工确认 |

自动化动作要同时看严重性和置信度。高严重但低置信不应直接破坏业务。

## 5. 安全性

SOAR 本身是高权限系统。

要求：

- Playbook 变更走代码评审。
- 凭证存放在 secret manager。
- 执行动作按最小权限授权。
- 所有动作有审计日志。
- 高风险动作需要审批。
- 测试环境验证后再上生产。

一个被攻陷的自动化平台可能比单个系统失陷更危险。

## 6. 告警富化

富化信息应帮助判断：

- 资产是否关键。
- 用户是否高权限。
- 行为是否首次出现。
- IP 是否来自常见地区。
- 账号最近是否变更权限。
- 资源 owner 是谁。
- 是否有相关告警。

富化不是堆字段，而是减少分析者查证时间。

## 7. 质量控制

自动化上线前要验证：

- 输入异常时不会误执行。
- API 超时能重试或降级。
- 第三方接口失败不会造成错误判断。
- 幂等性可保证。
- 速率限制不会被触发。
- 日志足够复盘。

自动化失败时要安全失败，不要半执行半沉默。

## 8. 指标

| 指标 | 含义 |
| --- | --- |
| Automation coverage | 可自动处理的告警比例 |
| Time saved | 节省分析时间 |
| False automation rate | 自动化误动作比例 |
| Manual approval rate | 需要人工确认的比例 |
| Playbook failure rate | 执行失败率 |
| Mean containment time | 平均遏制时间 |

不要为了提高自动化率而牺牲判断质量。

## 9. 成熟路径

1. 先做告警富化。
2. 再做工单和通知。
3. 引入证据自动采集。
4. 对高置信场景做半自动遏制。
5. 最后才做全自动响应。

安全自动化最好的状态是稳定、可解释、可回滚，而不是看起来很炫。
