# oasdiff 使用

oasdiff 用于比较 OpenAPI 规范差异，适合接口变更审计。

## 常用命令

```bash
oasdiff diff old.yaml new.yaml
```

```bash
oasdiff breaking old.yaml new.yaml
```

```bash
oasdiff changelog old.yaml new.yaml
```

```bash
oasdiff diff old.yaml new.yaml -f json
```

```bash
oasdiff summary old.yaml new.yaml
```

小记录：API 变更里新增公开路径、鉴权变化和 schema 放宽都值得重点看。
