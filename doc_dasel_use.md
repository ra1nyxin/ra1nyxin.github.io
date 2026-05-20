# dasel 使用

dasel 可以用统一选择器处理 JSON、YAML、TOML 和 XML，适合配置审计。

## 常用命令

```bash
dasel -f config.yaml
```

```bash
dasel -f config.yaml ".server.port"
```

```bash
dasel -f config.json ".users.[0].name"
```

```bash
dasel -f config.yaml -w json
```

```bash
dasel put -f config.yaml -t string ".env" "prod"
```

多格式配置项目里很方便，适合快速抽取安全相关字段。
