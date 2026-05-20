# Smuggler 使用

Smuggler 用于 HTTP request smuggling 检测，适合代理链和网关验证。

## 常用命令

```bash
python3 smuggler.py -u https://example.local
```

```bash
python3 smuggler.py -l urls.txt
```

```bash
python3 smuggler.py -u https://example.local -v
```

```bash
python3 smuggler.py -u https://example.local --timeout 10
```

```bash
python3 smuggler.py -u https://example.local -x http://127.0.0.1:8080
```

请求走私测试要控制目标和时间，命中后需要用原始请求手工复核。
