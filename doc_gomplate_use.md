# gomplate 使用

gomplate 用于模板渲染，适合检查 CI、K8s 和配置生成链路。

## 常用命令

```bash
gomplate -f template.yaml
```

```bash
gomplate -f template.yaml -o rendered.yaml
```

```bash
gomplate -d config=config.yaml -f template.yaml
```

```bash
gomplate --missing-key=error -f template.yaml
```

```bash
gomplate -i "{{ getenv \"HOME\" }}"
```

小记录：安全复核时要看模板输入来源，避免把未过滤输入渲染进命令或权限配置。
