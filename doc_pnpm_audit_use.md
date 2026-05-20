# pnpm audit 使用

pnpm audit 适合检查 pnpm-lock.yaml 管理的 Node.js 依赖漏洞。

## 常用命令

```bash
pnpm audit
```

```bash
pnpm audit --json > pnpm-audit.json
```

```bash
pnpm audit --prod
```

```bash
pnpm audit --audit-level high
```

```bash
pnpm why package-name
```

小记录：pnpm workspace 里要确认扫描根目录，某些漏洞只影响单个 package。
