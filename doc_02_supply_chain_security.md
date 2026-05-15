# Software Supply Chain Security

软件供应链安全关注的是代码从编写、依赖引入、构建、发布到运行的完整链路。真正的问题不只是“依赖有没有漏洞”，而是：谁能改代码、谁能改构建、谁能发布、谁能替换制品。

## 1. 供应链攻击面

| 环节 | 风险 |
| --- | --- |
| Source | 代码仓库被篡改、恶意 PR、凭证泄漏 |
| Dependency | 依赖混淆、typosquatting、恶意版本 |
| Build | CI runner 被控制、构建脚本被篡改 |
| Artifact | 镜像或包被替换、签名缺失 |
| Deploy | 发布权限过大、环境变量泄漏 |
| Runtime | 镜像漏洞、过度权限、横向移动 |

供应链安全的重点是建立可验证链路，而不是盲目扫描。

## 2. 最小权限模型

### 2.1 仓库权限

建议：

- 默认只给 read。
- merge 权限和 release 权限分离。
- 强制 branch protection。
- 禁止直接 push 到主分支。
- 要求 CODEOWNERS 审批关键路径。

关键路径示例：

```text
.github/workflows/
Dockerfile
package.json
pnpm-lock.yaml
requirements.txt
go.mod
Cargo.toml
deploy/
infra/
```

### 2.2 CI 权限

CI token 应按 job 最小授权。

常见错误：

```yaml
permissions: write-all
```

更合理：

```yaml
permissions:
  contents: read
  packages: write
  id-token: write
```

只在需要 OIDC 或发布制品的 job 中开放写权限。

## 3. 依赖治理

依赖治理不是简单升级所有包，而是建立风险分层。

| 风险 | 处理 |
| --- | --- |
| 直接依赖高危漏洞 | 优先修复 |
| 运行时可达漏洞 | 优先修复 |
| 开发依赖漏洞 | 按影响评估 |
| 不可达传递依赖 | 可延后 |
| abandonware | 迁移或替换 |
| 新增未知维护者包 | 人工审查 |

## 4. Lockfile 策略

Lockfile 是供应链稳定性的核心。

要求：

- 应提交 lockfile。
- CI 使用 frozen lockfile。
- 禁止构建时隐式升级。
- 依赖变更必须单独可审查。

示例：

```bash
npm ci
pnpm install --frozen-lockfile
pip install --require-hashes -r requirements.txt
cargo build --locked
go mod verify
```

## 5. 构建可信度

构建链路要回答：

1. 这个制品来自哪个 commit？
2. 谁触发了构建？
3. 使用了哪些依赖？
4. 构建环境是否可信？
5. 制品是否被签名？

推荐实践：

- 构建产物绑定 commit SHA。
- 生成 SBOM。
- 对镜像或包签名。
- 发布前做 provenance 校验。
- CI runner 隔离不同信任级别任务。

## 6. SBOM 的实际用法

SBOM 不只是合规文件。它应该用于：

- 快速定位受影响系统。
- 支撑漏洞响应。
- 对比构建前后依赖差异。
- 识别未知或异常组件。

最低要求：

```text
component name
version
package URL
license
hash
dependency relationship
source repository
```

## 7. 镜像安全基线

容器镜像建议：

- 使用最小基础镜像。
- 固定 digest，而不是只写 tag。
- 禁止 root 运行。
- 删除包管理器缓存。
- 不把密钥写入镜像层。
- 构建阶段和运行阶段分离。
- 镜像扫描结果进入发布门禁。

示例：

```dockerfile
FROM node:22-bookworm-slim@sha256:<digest>
USER node
```

## 8. Secret 管理

供应链事件中，密钥泄漏通常比漏洞更危险。

要求：

- 禁止长期云密钥进入 CI。
- 使用 OIDC 换取短期凭证。
- Secret 只注入需要的 job。
- PR from fork 不应访问敏感 secret。
- 对仓库历史进行 secret scanning。
- 泄漏后必须旋转，而不是只删除文件。

## 9. 发布门禁

建议建立分级门禁：

| 门禁 | 阻断条件 |
| --- | --- |
| Source | 未经审批修改关键文件 |
| Dependency | 新增高风险依赖 |
| Build | 构建不可复现或缺失 provenance |
| Artifact | 未签名或签名不可信 |
| Vulnerability | Critical 且运行时可达 |
| Secret | 检测到有效密钥 |

## 10. 事件响应清单

发现供应链异常时：

1. 冻结发布。
2. 保留构建日志和 runner 现场。
3. 定位受影响 commit、artifact、版本。
4. 下架或撤回受影响制品。
5. 旋转相关密钥。
6. 通知使用方。
7. 发布修复版本。
8. 回溯权限和审计日志。
9. 增加检测和门禁。

## 11. 关键指标

| 指标 | 说明 |
| --- | --- |
| Mean Time To Patch | 依赖漏洞修复时间 |
| Signed artifact ratio | 签名制品比例 |
| Reproducible build ratio | 可复现构建比例 |
| Secret exposure count | 密钥泄漏次数 |
| Critical dependency age | 高危依赖暴露时长 |
| Unreviewed workflow changes | 未审查 CI 变更 |

## 12. 核心原则

供应链安全不是“多跑几个扫描器”，而是：

- 权限最小化。
- 变更可审查。
- 构建可追溯。
- 制品可验证。
- 响应可定位。

无法追溯来源的制品，不应该被部署到生产环境。
