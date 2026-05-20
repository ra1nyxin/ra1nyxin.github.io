# njsscan 使用

njsscan 用于扫描 Node.js、Express、Koa 和前端项目里的安全问题。它适合在源码审计前先做一轮规则扫描，快速定位危险调用点。

## 基础扫描

```bash
njsscan .
```

```bash
njsscan app.js
```

```bash
njsscan src/
```

## 输出报告

```bash
njsscan . --json
```

```bash
njsscan . --sarif -o njsscan.sarif
```

```bash
njsscan . --html -o njsscan.html
```

## CI 和过滤

```bash
njsscan . --exit-warning
```

```bash
njsscan . --missing-controls
```

```bash
njsscan . --config .njsscan
```

Node 项目里重点看命令执行、模板渲染、路径拼接、反序列化和 SSRF。自动扫描命中后，要回到路由和输入来源确认。
