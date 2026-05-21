# audit-ci 使用

audit-ci 适合把 npm、Yarn、pnpm 的 audit 结果放进 CI 门禁。它的价值在于把依赖漏洞检查固定到流水线里，避免只靠人工偶尔扫一次。

## 基础门禁

```bash
audit-ci --config audit-ci.json
```

```bash
audit-ci --moderate
```

```bash
audit-ci --high
```

阈值要和项目节奏匹配。业务发布频繁的项目可以先从 high 开始，后面再逐步收紧。

## 报告和例外

```bash
audit-ci --report-type full
```

```bash
audit-ci --allowlist GHSA-xxxx-yyyy-zzzz
```

```bash
audit-ci --config audit-ci.json --report-type summary
```

allowlist 必须写清原因、影响范围和复查时间。长期不过期的例外很容易变成漏洞堆积。

## 配置习惯

把配置文件放进仓库，别只写在 CI 命令里。这样门禁阈值、例外项和包管理器选择都能被 review。
