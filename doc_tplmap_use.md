# tplmap 常用用法

tplmap 适合服务端模板注入检测。常用参数：`-u` URL，`-d` POST 数据，`--cookie` Cookie。

```bash
python3 tplmap.py -u "http://192.168.1.10/?name=test"
```

```bash
python3 tplmap.py -u "http://192.168.1.10/" -d "name=test"
```

```bash
python3 tplmap.py -u "http://192.168.1.10/?name=test" --cookie "session=VALUE"
```

```bash
python3 tplmap.py -u "http://192.168.1.10/?name=test" --os-shell
```

小记录：SSTI 要看模板引擎和上下文。tplmap 可以辅助验证，但手工 payload 和回显判断仍然很重要。
