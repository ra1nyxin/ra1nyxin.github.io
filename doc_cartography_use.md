# Cartography 使用

Cartography 用图数据库建模云资产和身份关系，适合长期资产关系分析。

## 常用命令

```bash
cartography --help
```

```bash
cartography --neo4j-uri bolt://localhost:7687 --neo4j-user neo4j --neo4j-password pass
```

```bash
cartography --aws-sync-all-profiles
```

```bash
cartography --selected-modules aws,github
```

```bash
cypher-shell -u neo4j -p pass "MATCH (n) RETURN labels(n), count(n)"
```

它适合做持续图谱，初次落地要先控制同步范围和凭据权限。
