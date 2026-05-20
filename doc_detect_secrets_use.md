# detect-secrets 常用用法

detect-secrets 适合代码库里的密钥扫描。常用参数：`scan` 扫描，`audit` 审核，`-l` 指定锁文件。

```bash
detect-secrets scan > .secrets.baseline
```

```bash
detect-secrets audit .secrets.baseline
```

```bash
detect-secrets scan --all-files
```

```bash
detect-secrets-hook --baseline .secrets.baseline
```

detect-secrets 适合和 gitleaks/trufflehog 互补。结果里要分辨测试值、样例和真实凭据。
