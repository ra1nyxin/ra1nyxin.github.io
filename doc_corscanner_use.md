# CORScanner 使用

CORScanner 用于批量检测 CORS 错误配置。

## 常用命令

```bash
python3 cors_scan.py -u http://example.local
```

```bash
python3 cors_scan.py -i urls.txt
```

```bash
python3 cors_scan.py -u http://example.local -p 20
```

```bash
python3 cors_scan.py -u http://example.local -o output.json
```

```bash
python3 cors_scan.py -u http://example.local --cookie "sid=abc"
```

批量命中后要挑代表性接口手工复核响应头和敏感数据。
