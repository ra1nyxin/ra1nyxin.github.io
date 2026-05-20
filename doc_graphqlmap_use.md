# GraphQLmap 使用

GraphQLmap 用于 GraphQL 接口枚举和测试，适合授权环境分析 schema 和字段。

## 常用命令

```bash
python3 graphqlmap.py -u http://example.local/graphql
```

```bash
python3 graphqlmap.py -u http://example.local/graphql --method POST
```

```bash
python3 graphqlmap.py -u http://example.local/graphql --headers "Authorization: Bearer TOKEN"
```

```bash
python3 graphqlmap.py -u http://example.local/graphql --dump
```

```bash
python3 graphqlmap.py -u http://example.local/graphql --json
```

GraphQL 问题通常在字段级鉴权和查询复杂度，schema 只是入口。
