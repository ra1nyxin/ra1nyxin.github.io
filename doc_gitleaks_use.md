# Gitleaks 常用用法

这篇记录 Gitleaks 的常用命令。它适合扫描仓库里的密钥、Token、证书片段和历史提交里的敏感信息。

## 基础扫描

扫描当前仓库。

```bash
gitleaks detect
```

扫描指定路径。

```bash
gitleaks detect --source .
```

扫描时输出更详细日志。

```bash
gitleaks detect --verbose
```

扫描工作区当前文件。

```bash
gitleaks protect --staged
```

## 输出报告

输出 JSON 报告。

```bash
gitleaks detect --report-format json --report-path gitleaks-report.json
```

输出 SARIF 报告。

```bash
gitleaks detect --report-format sarif --report-path gitleaks-report.sarif
```

只看退出码，适合 CI 阻断。

```bash
gitleaks detect --redact
```

## 配置文件

指定配置文件。

```bash
gitleaks detect --config .gitleaks.toml
```

生成默认配置样例。

```bash
gitleaks detect --config .gitleaks.toml --source .
```

忽略已知结果。

```bash
gitleaks detect --baseline-path gitleaks-baseline.json
```

## 扫历史范围

扫描最近一次提交。

```bash
gitleaks detect --log-opts "-1"
```

扫描某个提交范围。

```bash
gitleaks detect --log-opts "HEAD~20..HEAD"
```

扫描指定分支。

```bash
gitleaks detect --log-opts "origin/main"
```

## 小记录

Gitleaks 扫到结果后要先判断是否仍然有效，再决定撤销、轮换、吊销或保留例外。历史提交里的密钥即使后来删除，也要按已经暴露处理。
