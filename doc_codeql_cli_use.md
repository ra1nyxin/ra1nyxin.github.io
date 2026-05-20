# CodeQL CLI 使用

CodeQL CLI 适合做源码级数据流分析。它比普通 grep 慢，但能把输入源、传播路径和危险 sink 关联起来，适合较大的项目。

## 建库

```bash
codeql database create db-python --language=python --source-root .
```

```bash
codeql database create db-js --language=javascript --source-root .
```

```bash
codeql database create db-java --language=java --command "mvn -q -DskipTests package"
```

## 扫描

```bash
codeql database analyze db-js javascript-security-and-quality.qls --format=sarif-latest --output=codeql.sarif
```

```bash
codeql database analyze db-python python-security-and-quality.qls --format=csv --output=codeql.csv
```

```bash
codeql query run query.ql --database db-js
```

## 结果处理

```bash
codeql bqrs decode result.bqrs --format=csv
```

小记录：CodeQL 适合查复杂调用链。建库命令、语言和构建参数要写进记录，否则后续很难复现同样结果。
