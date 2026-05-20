# SSLyze 常用用法

SSLyze 适合批量 TLS 扫描和报告输出。常用参数：目标，`--regular` 常规检查，`--json_out` 输出 JSON。

```bash
sslyze example.com:443
```

```bash
sslyze --regular example.com:443
```

```bash
sslyze --json_out sslyze.json example.com:443
```

```bash
sslyze --certinfo --tlsv1_2 --tlsv1_3 example.com:443
```

SSLyze 适合结构化 TLS 检查。多目标时把结果输出 JSON，后面用 jq 汇总会方便。
