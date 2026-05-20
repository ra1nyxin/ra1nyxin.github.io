# Corsy 使用

Corsy 用于检查 CORS 配置问题，适合 Web API 暴露面复核。

## 常用命令

```bash
python3 corsy.py -u http://example.local
```

```bash
python3 corsy.py -i urls.txt
```

```bash
python3 corsy.py -u http://example.local -t 20
```

```bash
python3 corsy.py -u http://example.local -o corsy.json
```

```bash
python3 corsy.py -u http://example.local --headers "Cookie: session=abc"
```

小记录：CORS 风险要结合凭据发送、敏感响应和 Origin 反射判断。
