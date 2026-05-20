# Brakeman 使用

Brakeman 用于 Ruby on Rails 项目的静态安全扫描，适合快速定位注入、XSS 和配置问题。

## 常用命令

```bash
brakeman
```

```bash
brakeman -o brakeman.html
```

```bash
brakeman -f json -o brakeman.json
```

```bash
brakeman -A
```

```bash
brakeman --confidence-level 2
```

小记录：Rails 项目里重点看 SQL 拼接、模板输出、redirect 和 mass assignment。
