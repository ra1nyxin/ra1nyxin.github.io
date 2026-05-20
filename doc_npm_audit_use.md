# npm audit 使用

npm audit 用于检查 Node.js 项目依赖漏洞，适合前端、后端和构建工具链。

## 常用命令

```bash
npm audit
```

```bash
npm audit --json > npm-audit.json
```

```bash
npm audit --production
```

```bash
npm audit fix --dry-run
```

```bash
npm audit signatures
```

Node 项目要区分 devDependency 和生产依赖，构建期工具漏洞与运行时风险要分开写。
