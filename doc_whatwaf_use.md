# WhatWaf 常用用法

WhatWaf 适合 WAF 识别和简单绕过测试。常用参数：`-u` 目标，`--ra` 随机 UA，`--proxy` 代理。

```bash
python3 whatwaf.py -u https://example.com
```

```bash
python3 whatwaf.py -u https://example.com --ra
```

```bash
python3 whatwaf.py -u https://example.com --proxy http://127.0.0.1:8080
```

```bash
python3 whatwaf.py -l urls.txt
```

小记录：WhatWaf 适合辅助判断防护存在。比赛里不要把绕过测试做得太吵，先确认目标范围和速率。
