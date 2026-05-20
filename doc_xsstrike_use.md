# XSStrike 常用用法

XSStrike 适合 XSS 检测和 payload 分析。常用参数：`-u` URL，`--crawl` 爬取，`--proxy` 代理。

```bash
python3 xsstrike.py -u "https://example.com/search?q=test"
```

```bash
python3 xsstrike.py -u "https://example.com/search?q=test" --crawl
```

```bash
python3 xsstrike.py -u "https://example.com/search?q=test" --proxy http://127.0.0.1:8080
```

```bash
python3 xsstrike.py --seeds urls.txt
```

XSStrike 适合手工验证前的辅助分析。比赛里不要只看工具结论，反射点和上下文要自己确认。
