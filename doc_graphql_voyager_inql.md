# GraphQL Voyager 与 InQL

GraphQL 测试重点是 schema、查询深度、鉴权边界和批量查询。Voyager 适合看结构，InQL 适合从代理流量和 introspection 里整理接口。

## introspection

```bash
curl -s http://example.local/graphql -H 'Content-Type: application/json' --data '{"query":"{__schema{types{name}}}"}'
```

```bash
python3 inql.py -t http://example.local/graphql
```

```bash
python3 inql.py -t http://example.local/graphql --generate-html
```

## Voyager 查看

```bash
npx graphql-voyager http://example.local/graphql
```

```bash
curl -s http://example.local/graphql/schema.json -o schema.json
```

```bash
python3 inql.py -f schema.json
```

## 常见验证

```bash
curl -s http://example.local/graphql -H 'Content-Type: application/json' --data '{"query":"query{viewer{id email role}}"}'
```

小记录：GraphQL 的问题经常在字段级鉴权。拿到 schema 后，按对象和角色对照测试，比盲扫更有效。
