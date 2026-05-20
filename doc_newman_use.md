# Newman 使用

Newman 用于命令行运行 Postman 集合，适合 API 回归和安全用例复测。

## 常用命令

```bash
newman run collection.json
```

```bash
newman run collection.json -e environment.json
```

```bash
newman run collection.json --reporters cli,json --reporter-json-export newman.json
```

```bash
newman run collection.json --delay-request 200
```

```bash
newman run collection.json --folder "Auth"
```

小记录：把安全复测用例沉淀成 collection，后续改版验证会轻松很多。
