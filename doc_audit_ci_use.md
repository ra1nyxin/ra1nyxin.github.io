# audit-ci 使用

audit-ci 适合把 npm/yarn/pnpm audit 结果放进 CI 门禁。

## 常用命令

```bash
audit-ci --config audit-ci.json
```

```bash
audit-ci --moderate
```

```bash
audit-ci --high
```

```bash
audit-ci --report-type full
```

```bash
audit-ci --allowlist GHSA-xxxx-yyyy-zzzz
```

门禁阈值要和项目节奏匹配，allowlist 必须写清原因和复查时间。
