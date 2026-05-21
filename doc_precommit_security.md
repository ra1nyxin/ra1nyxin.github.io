# pre-commit 安全钩子

pre-commit 可以把 secret 扫描、格式化、基础 lint 和轻量安全检查放到提交前执行。它适合把低成本问题提前挡在开发机上。

## 安装和运行

```bash
pre-commit install
```

```bash
pre-commit run --all-files
```

```bash
pre-commit run detect-secrets --all-files
```

首次接入时先跑全量，确认误报和耗时。之后提交时只跑变更文件，体验会轻很多。

## 维护

```bash
pre-commit autoupdate
```

```bash
pre-commit clean
```

```bash
pre-commit run --hook-stage manual --all-files
```

钩子版本要定期更新，但更新后要看 diff 和耗时变化。安全类钩子误报太多时，团队很容易绕过它。

## 习惯

轻量检查放 pre-commit，重型扫描放 CI。secret 扫描、格式化、基础静态检查适合前移，依赖漏洞和容器扫描更适合流水线。
