# Semgrep 常用用法

这篇记录 Semgrep 的常用命令。它适合在代码仓库里做规则扫描，查危险 API、框架误用、硬编码密钥和一些项目内约定。

## 基础扫描

使用自动配置扫描当前目录。

```bash
semgrep scan --config auto
```

使用官方规则集。

```bash
semgrep scan --config p/default
```

指定语言规则集。

```bash
semgrep scan --config p/javascript
```

扫描指定目录。

```bash
semgrep scan --config p/default src/
```

## 输出格式

输出 JSON。

```bash
semgrep scan --config p/default --json -o semgrep.json
```

输出 SARIF。

```bash
semgrep scan --config p/default --sarif -o semgrep.sarif
```

只显示错误级别结果。

```bash
semgrep scan --config p/default --severity ERROR
```

## 本地规则

使用单个规则文件。

```bash
semgrep scan --config rules/no-eval.yml
```

使用规则目录。

```bash
semgrep scan --config rules/
```

测试规则。

```bash
semgrep test rules/
```

## 快速查一种模式

查 JavaScript 里的 eval。

```bash
semgrep -e "eval(...)" --lang javascript .
```

查 Python 里的 subprocess shell。

```bash
semgrep -e "subprocess.$FUNC(..., shell=True, ...)" --lang python .
```

查硬编码 token 形态。

```bash
semgrep -e "$KEY = \"...\"" --lang generic .
```

## CI 里使用

发现问题时返回非零退出码。

```bash
semgrep scan --config p/default --error
```

限制扫描超时。

```bash
semgrep scan --config p/default --timeout 60
```

排除目录。

```bash
semgrep scan --config p/default --exclude vendor --exclude node_modules
```

## 小记录

Semgrep 的价值在于把项目里反复出现的代码模式固定成规则。第一次写规则不用追求复杂，先抓住一个容易误用的 API，再用测试样例慢慢收紧。
