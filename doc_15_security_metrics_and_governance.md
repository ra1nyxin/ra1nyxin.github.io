# Security Metrics and Governance

安全治理需要指标，但错误的指标会制造错误行为。只统计漏洞数量、告警数量或培训完成率，很容易让团队优化报表而不是降低风险。

好的安全指标应该帮助决策：哪里风险最高，哪些控制有效，哪些问题长期没有关闭，资源应该投向哪里。

## 1. 指标分类

| 类型 | 说明 | 示例 |
| --- | --- | --- |
| Exposure | 暴露面 | 公开资产数量、外部端口、公开 bucket |
| Control | 控制覆盖 | MFA 覆盖率、日志接入率 |
| Effectiveness | 控制效果 | 检测命中质量、阻断率 |
| Response | 响应能力 | MTTD、MTTR |
| Risk | 风险状态 | 高危漏洞超期数量 |
| Outcome | 结果 | 事件影响下降、重复问题减少 |

只看活动指标会误导管理层。完成了多少扫描不等于风险下降。

## 2. 指标设计原则

| 原则 | 说明 |
| --- | --- |
| Actionable | 指标变化能推动动作 |
| Owned | 每个指标有 owner |
| Measurable | 数据来源可靠 |
| Comparable | 能看趋势 |
| Hard to game | 不容易被人为刷好看 |
| Risk-aligned | 和真实风险相关 |

如果一个指标变差后没人知道该做什么，它就不是好指标。

## 3. 漏洞治理指标

建议跟踪：

| 指标 | 解释 |
| --- | --- |
| Critical exposure count | 暴露在关键资产上的严重漏洞 |
| SLA breach rate | 超过修复期限的比例 |
| Exception age | 例外存在多久 |
| Reopen rate | 修复后复发比例 |
| Asset coverage | 扫描覆盖了多少资产 |
| Exploitability context | 是否有真实可利用路径 |

漏洞优先级应结合资产、暴露面、利用条件和补偿控制，而不是只看 CVSS。

## 4. 检测与响应指标

| 指标 | 说明 |
| --- | --- |
| MTTD | 平均发现时间 |
| MTTA | 平均确认时间 |
| MTTC | 平均遏制时间 |
| MTTR | 平均恢复时间 |
| False positive rate | 误报比例 |
| Alert actionability | 告警是否能指导行动 |
| Coverage by scenario | 关键攻击场景覆盖 |

告警数量减少不一定是好事，可能是规则失效；告警数量增加也不一定是坏事，可能是覆盖提升。

## 5. 身份安全指标

| 指标 | 目标 |
| --- | --- |
| Admin MFA coverage | 100% |
| Dormant privileged accounts | 接近 0 |
| Orphan accounts | 接近 0 |
| JIT permission usage | 持续提升 |
| Service account owner coverage | 100% |
| High-risk OAuth grants | 可解释且受控 |

身份指标应重点关注高权限和长期凭证。

## 6. 云与 SaaS 指标

| 指标 | 说明 |
| --- | --- |
| Public storage count | 公开对象存储数量 |
| Unencrypted critical resources | 未加密关键资源 |
| Cloud audit log coverage | 云审计覆盖 |
| SaaS SSO coverage | SaaS 是否纳入统一身份 |
| SaaS admin count | 管理员数量 |
| External sharing exposure | 外部共享暴露 |

云和 SaaS 指标要能按业务 owner 拆分，否则很难推动修复。

## 7. 风险例外治理

例外不是永久豁免。

每个例外应包含：

- 风险描述。
- 业务理由。
- 补偿控制。
- 影响范围。
- owner。
- 过期时间。
- 复核记录。

关键指标：

| 指标 | 目标 |
| --- | --- |
| Expired exceptions | 0 |
| Long-lived exceptions | 持续下降 |
| Exceptions without compensating controls | 0 |
| Exception renewal rate | 可解释 |

例外过多通常说明安全要求和工程现实之间存在结构性矛盾。

## 8. 报告方式

不同受众需要不同层次：

| 受众 | 内容 |
| --- | --- |
| 高层 | 业务风险、趋势、关键决策 |
| 工程负责人 | 资产、SLA、owner、修复优先级 |
| 安全团队 | 规则质量、覆盖缺口、响应效率 |
| 审计合规 | 控制证据、例外、复核记录 |

不要把 SIEM 或扫描器原始报表直接发给管理层。指标需要解释风险含义。

## 9. 治理节奏

建议：

- 每周看高风险暴露和超期项。
- 每月看控制覆盖和趋势。
- 每季度做风险复盘和预算调整。
- 每半年复核指标是否仍然有效。

安全指标也会过期。业务架构变化后，旧指标可能不再代表真实风险。

## 10. 好指标示例

```text
过去 30 天，互联网暴露关键资产中，存在已知利用且无补偿控制的漏洞数量。
```

这个指标比“高危漏洞数量”更有价值，因为它结合了资产、暴露面、利用状态和控制情况。

安全治理的目标不是让仪表盘变绿，而是让组织在有限资源下优先处理真正重要的风险。
