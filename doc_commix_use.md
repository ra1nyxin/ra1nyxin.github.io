# Commix 常用用法

Commix 适合命令注入检测和验证。常用参数：`-u` URL，`--data` POST 数据，`--cookie` Cookie，`--proxy` 代理。

```bash
commix -u "http://192.168.1.10/ping?host=127.0.0.1"
```

```bash
commix -u "http://192.168.1.10/ping" --data "host=127.0.0.1"
```

```bash
commix -u "http://192.168.1.10/ping?host=127.0.0.1" --cookie "PHPSESSID=VALUE"
```

```bash
commix -u "http://192.168.1.10/ping?host=127.0.0.1" --proxy http://127.0.0.1:8080
```

Commix 适合验证命令注入线索。参数来源最好先从 Burp 请求里整理，避免工具测错位置。
