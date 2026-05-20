# graphw00f 使用

graphw00f 用于识别 GraphQL 引擎和指纹，适合接口初筛。

## 常用命令

```bash
graphw00f -d -f http://example.local/graphql
```

```bash
graphw00f -t http://example.local/graphql
```

```bash
graphw00f -l urls.txt
```

```bash
graphw00f -t http://example.local/graphql -o json
```

```bash
graphw00f -t http://example.local/graphql --headers "Authorization: Bearer TOKEN"
```

识别到实现后，再按对应框架查 introspection、错误格式和限制策略。
