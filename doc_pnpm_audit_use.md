# pnpm audit 使用

pnpm audit 用来检查 `pnpm-lock.yaml` 管理的 Node.js 依赖漏洞。workspace 项目里要先确认扫描根目录，很多漏洞只影响某个 package。

## 基础扫描

```bash
pnpm audit
```

```bash
pnpm audit --prod
```

```bash
pnpm audit --audit-level high
```

先跑全量，再看生产依赖。`--audit-level high` 适合 CI 里设门槛，但本地排查时不要只看 high，部分 medium 在暴露面较大的服务里也要处理。

## 留档和定位

```bash
pnpm audit --json > pnpm-audit.json
```

```bash
pnpm why package-name
```

```bash
pnpm list package-name -r
```

`pnpm why` 能看出漏洞包是从哪条依赖链带进来的。workspace 里再配合 `-r` 看影响范围，避免只修了一个 package。

## 处理方式

优先升级直接依赖；如果漏洞来自间接依赖，再看 override、补丁版本或替代库。修完后重新生成 lockfile，并确认测试没有被依赖变更打断。
