# bundler-audit 使用

bundler-audit 用来检查 Ruby Gemfile.lock 中的漏洞，适合 Rails 与 Ruby 服务。

## 常用命令

```bash
bundle audit check
```

```bash
bundle audit check --update
```

```bash
bundle audit check --format json
```

```bash
bundle audit check --ignore CVE-2023-22795
```

```bash
bundle audit update
```

Gem 漏洞复核时要看 Gemfile.lock，开发环境和生产环境依赖最好分开判断。
