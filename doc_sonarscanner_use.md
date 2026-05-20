# SonarScanner 使用

SonarScanner 适合做代码质量与安全热点扫描，常见于企业 CI。

## 常用命令

```bash
sonar-scanner
```

```bash
sonar-scanner -Dsonar.projectKey=app -Dsonar.sources=.
```

```bash
sonar-scanner -Dsonar.host.url=http://127.0.0.1:9000
```

```bash
sonar-scanner -Dsonar.login=$SONAR_TOKEN
```

```bash
sonar-scanner -Dsonar.qualitygate.wait=true
```

小记录：安全热点需要人工确认，适合把确认结论和代码位置一起沉淀。
