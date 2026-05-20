# h2cSmuggler 使用

h2cSmuggler 用于检测 h2c 升级相关的代理绕过问题。

## 常用命令

```bash
python3 h2csmuggler.py -x https://example.local
```

```bash
python3 h2csmuggler.py -x https://example.local -t http://127.0.0.1/admin
```

```bash
python3 h2csmuggler.py -x https://example.local -i urls.txt
```

```bash
python3 h2csmuggler.py -x https://example.local -v
```

```bash
python3 h2csmuggler.py -x https://example.local --test
```

小记录：适合检查反向代理到后端的协议升级边界，结果要结合代理配置复核。
