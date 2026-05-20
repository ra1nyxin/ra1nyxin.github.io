# swagger-cli 使用

swagger-cli 用于校验和打包 OpenAPI/Swagger 文档。

## 常用命令

```bash
swagger-cli validate openapi.yaml
```

```bash
swagger-cli bundle openapi.yaml -o bundled.yaml
```

```bash
swagger-cli bundle openapi.yaml --dereference -o deref.yaml
```

```bash
swagger-cli validate swagger.json
```

```bash
npx swagger-cli validate openapi.yaml
```

安全审计前先校验规范，引用展开后更方便做路径和参数检查。
