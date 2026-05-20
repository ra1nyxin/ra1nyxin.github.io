# OWASP Dependency-Check 使用

Dependency-Check 用来检查项目依赖中的公开漏洞。它适合 Java、Node、Python、.NET 等项目的依赖风险初筛。

## 基础扫描

```bash
dependency-check --scan . --out reports
```

```bash
dependency-check --scan . --format HTML --out reports
```

```bash
dependency-check --scan . --format JSON --out reports
```

## 项目和抑制

```bash
dependency-check --project app --scan . --out reports
```

```bash
dependency-check --scan . --suppression suppression.xml --out reports
```

```bash
dependency-check --scan . --failOnCVSS 7
```

## 数据更新

```bash
dependency-check --updateonly
```

小记录：依赖扫描报告要结合可达性判断。高 CVSS 的传递依赖如果没有被调用，处理优先级可以和业务团队再确认。
