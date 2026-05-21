# Yarn audit 使用

Yarn 项目可以用 audit 命令检查依赖漏洞。老前端项目、monorepo、长期没升级的构建工具链，都适合先跑一轮。

## Yarn classic

```bash
yarn audit
```

```bash
yarn audit --json
```

```bash
yarn why lodash
```

Yarn 1 的 audit 输出比较直接，`yarn why` 用来追依赖链。先看漏洞包是直接依赖还是间接依赖，再决定升级哪个包。

## Yarn Berry

```bash
yarn npm audit
```

```bash
yarn npm audit --severity high
```

```bash
yarn npm audit --json > yarn-audit.json
```

Yarn 2+ 的命令和 classic 不一样，记录里要写清 Yarn 版本。CI 里建议按严重级别设门槛，本地排查时保留 JSON 方便复核。

## 处理习惯

修复前先看 lockfile 和 workspace 范围。monorepo 里同一个漏洞可能只影响某个 package，盲目全局升级容易带来额外变更。
