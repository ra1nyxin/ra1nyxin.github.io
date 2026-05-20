# gosec 使用

gosec 用来检查 Go 代码里的安全问题，适合 API 服务、CLI 工具和云原生组件。

## 常用命令

```bash
gosec ./...
```

```bash
gosec -fmt=json -out=gosec.json ./...
```

```bash
gosec -exclude=G104 ./...
```

```bash
gosec -severity=medium ./...
```

```bash
gosec -tests ./...
```

Go 项目里常见问题是错误处理丢失、路径拼接、TLS 配置和命令执行参数。
