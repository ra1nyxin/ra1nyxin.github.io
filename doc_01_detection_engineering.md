# Detection Engineering Playbook

检测工程不是“写几条规则”，而是把威胁假设、数据质量、规则逻辑、验证方法和响应动作串成一个可持续迭代的闭环。一个成熟检测体系应该能回答三个问题：

1. 我们到底在检测什么行为？
2. 触发以后能不能解释清楚？
3. 这个告警能不能稳定推动响应动作？

## 1. 检测对象分层

建议把检测对象分成四层，不要只盯着单点 IOC。

| 层级 | 关注点 | 示例 |
| --- | --- | --- |
| Indicator | 静态特征 | IP、域名、Hash、路径 |
| Behavior | 行为序列 | 异常登录后创建访问密钥 |
| Technique | 技术手法 | 凭证转储、横向移动、持久化 |
| Objective | 攻击目标 | 数据外传、权限扩张、供应链投毒 |

低层检测响应快，但容易过期；高层检测更稳定，但需要更好的上下文和数据建模。

## 2. 一条检测规则应包含的元数据

每条规则至少要有这些字段：

| 字段 | 说明 |
| --- | --- |
| Detection ID | 稳定唯一标识 |
| Threat hypothesis | 威胁假设 |
| Data source | 依赖日志来源 |
| Logic | 查询或规则逻辑 |
| Tactic / Technique | ATT&CK 映射 |
| Severity | 风险等级 |
| Confidence | 命中可信度 |
| Expected false positives | 预期误报场景 |
| Triage steps | 分析步骤 |
| Response action | 可执行响应动作 |
| Test case | 测试样本或复现方式 |

没有 triage steps 的规则，本质上只是噪声制造器。

## 3. 数据源优先级

不是所有日志都同等重要。优先建设能支持高价值检测的数据源。

| 数据源 | 价值 | 常见问题 |
| --- | --- | --- |
| Identity logs | 账号接管、权限滥用 | 字段不统一、时区混乱 |
| Endpoint telemetry | 执行链、进程树、文件行为 | 数据量大、采集成本高 |
| Cloud control plane | 云资源变更、权限扩张 | 多账号聚合困难 |
| Network metadata | 外联、横向移动 | 加密流量不可见 |
| SaaS audit logs | 数据访问、外传迹象 | API 限速、保留期短 |
| CI/CD logs | 构建篡改、密钥泄漏 | 日志格式松散 |

优先级建议：

1. 身份日志
2. 云控制面日志
3. 终端进程与脚本执行日志
4. CI/CD 与代码仓库审计日志
5. 网络元数据

## 4. 检测逻辑设计原则

### 4.1 少写“单点异常”，多写“上下文组合”

弱检测：

```text
用户在凌晨登录。
```

更好的检测：

```text
用户在非常用地理位置登录后，15 分钟内创建新的访问密钥，并调用高敏 API。
```

上下文组合能显著降低误报。

### 4.2 规则应区分“异常”和“恶意”

异常不等于恶意。规则可以输出异常，但告警等级必须基于行为链条和影响面。

建议把规则结果分成：

| 类型 | 处理方式 |
| --- | --- |
| Observation | 只记录，不告警 |
| Suspicious | 进入队列，低优先级分析 |
| High confidence | 直接告警并触发响应 |
| Critical | 自动化遏制或升级 |

## 5. 规则质量指标

规则上线后要持续度量。

| 指标 | 目标 |
| --- | --- |
| True Positive Rate | 越高越好 |
| False Positive Rate | 可解释且可控制 |
| Mean Time To Triage | 越短越好 |
| Alert volume | 不超过分析能力 |
| Data freshness | 日志延迟可接受 |
| Coverage | 能覆盖目标技术手法 |

如果一条规则持续触发但无人处理，应该降级、改写或移除。

## 6. 测试方法

检测规则不能只靠“上线后看有没有告警”。

推荐测试方式：

1. 单元测试：固定输入日志，验证规则输出。
2. 回放测试：用历史日志回放，观察误报量。
3. 对抗模拟：使用安全的模拟行为验证链路。
4. 回归测试：规则修改后确认旧样本仍可命中。
5. 数据缺失测试：模拟关键字段缺失，确认规则不会失控。

## 7. 告警分级建议

| 等级 | 条件 | 响应 |
| --- | --- | --- |
| Low | 单一弱信号 | 记录、聚合 |
| Medium | 多个弱信号组合 | 人工分析 |
| High | 高置信行为链 | 立即响应 |
| Critical | 已发生权限扩张、持久化或数据访问 | 遏制、升级、取证 |

## 8. 检测工程闭环

一个可持续流程：

1. 威胁建模：明确要检测的攻击路径。
2. 数据确认：确认字段、延迟、覆盖率。
3. 规则编写：实现最小可用逻辑。
4. 测试验证：样本、历史日志、模拟行为。
5. 上线灰度：先 Observation，再告警。
6. 调优：处理误报和漏报。
7. 文档化：补齐 triage 和 response。
8. 复盘：事件后更新规则。

## 9. 设计模板

```yaml
id: DET-IDENTITY-001
name: New access key after impossible travel login
hypothesis: >
  If an account is compromised, the actor may create a new access key
  shortly after anomalous authentication.
data_sources:
  - identity_login
  - cloud_audit
severity: high
confidence: medium
logic:
  - impossible_travel_login within 30m
  - create_access_key within 15m after login
false_positives:
  - VPN changes
  - emergency admin operation
triage:
  - verify login source
  - inspect recent API calls
  - check MFA status
response:
  - disable newly created key
  - rotate account credentials
  - review privilege changes
```

## 10. 核心原则

检测工程的目标不是“规则数量很多”，而是：

- 覆盖关键攻击路径。
- 告警能解释。
- 响应能执行。
- 误报能管理。
- 规则能持续演进。

如果一条规则不能推动明确动作，它就不应该成为高优先级告警。
