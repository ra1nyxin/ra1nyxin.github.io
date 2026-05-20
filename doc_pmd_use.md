# PMD 使用

PMD 适合扫描 Java、Apex、JavaScript 等代码中的质量和安全问题。

## 常用命令

```bash
pmd check -d src -R rulesets/java/quickstart.xml -f text
```

```bash
pmd check -d src -R category/java/security.xml -f json -r pmd.json
```

```bash
pmd check -d src -R rulesets/java/quickstart.xml -f html -r pmd.html
```

```bash
pmd designer
```

```bash
pmd check -d src -R custom-rules.xml -f text
```

安全规则命中后要结合输入来源，PMD 更适合做初筛和风格基线。
