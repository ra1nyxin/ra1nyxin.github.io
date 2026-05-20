# govulncheck 使用

govulncheck 会结合 Go 调用链检查依赖漏洞，适合判断漏洞是否真的被代码触达。

## 常用命令

```bash
govulncheck ./...
```

```bash
govulncheck -json ./... > govulncheck.json
```

```bash
govulncheck ./cmd/server
```

```bash
govulncheck -mode=source ./...
```

```bash
govulncheck -mode=binary ./server
```

小记录：它比单纯依赖清单更接近真实风险，报告里的 call stack 很值得保存。
