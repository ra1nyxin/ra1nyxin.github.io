# OWASP ZAP Baseline 常用用法

ZAP Baseline 适合快速做 Web 被动扫描。常用参数：`-t` 目标，`-r` HTML 报告，`-J` JSON 报告。

```bash
docker run -t owasp/zap2docker-stable zap-baseline.py -t https://example.com
```

```bash
docker run -t -v "$PWD:/zap/wrk" owasp/zap2docker-stable zap-baseline.py -t https://example.com -r zap.html
```

```bash
docker run -t -v "$PWD:/zap/wrk" owasp/zap2docker-stable zap-baseline.py -t https://example.com -J zap.json
```

```bash
docker run -t owasp/zap2docker-stable zap-full-scan.py -t https://example.com
```

Baseline 偏被动和安全，适合比赛里快速拿一份基础报告。命中项仍然要手工确认。
