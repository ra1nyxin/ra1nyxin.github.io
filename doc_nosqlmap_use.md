# NoSQLMap 常用用法

NoSQLMap 适合 NoSQL 注入测试。常用参数：`-t` 目标，`-p` 参数，`--dump` 导出，`--proxy` 代理。

```bash
python3 nosqlmap.py -t http://192.168.1.10/login -p username
```

```bash
python3 nosqlmap.py -t http://192.168.1.10/login -p username --dump
```

```bash
python3 nosqlmap.py -t http://192.168.1.10/login -p username --proxy 127.0.0.1:8080
```

```bash
python3 nosqlmap.py -h
```

小记录：NoSQL 测试常见于 MongoDB/Elastic 相关站点。字段名、JSON 结构和查询行为都要先确认。
