# Brakeman 使用

Brakeman 用于 Ruby on Rails 项目的静态安全扫描，适合快速定位注入、XSS、重定向、配置和 mass assignment 问题。

## 基础扫描

```bash
brakeman
```

```bash
brakeman -A
```

```bash
brakeman --confidence-level 2
```

默认扫描适合本地初筛，`-A` 会打开更激进的检查。信心等级越低，误报会越多，但早期排查能多给一些线索。

## 报告输出

```bash
brakeman -o brakeman.html
```

```bash
brakeman -f json -o brakeman.json
```

```bash
brakeman -f tabs -o brakeman.tsv
```

HTML 适合人工查看，JSON/TSV 适合 CI 和后续整理。报告里要保留文件、行号、confidence 和 warning type。

## 看结果

Rails 项目重点看 SQL 拼接、模板输出、redirect、参数透传和 mass assignment。每个发现都要回到 controller、model、view 的数据流里确认。
