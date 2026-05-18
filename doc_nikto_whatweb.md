# Nikto 和 WhatWeb 常用用法

这篇记录 Nikto、WhatWeb 的常用命令。它们适合做 Web 服务指纹和基础配置检查，通常放在 Web 枚举早期。

## WhatWeb

基础识别。

```bash
whatweb http://192.168.1.10
```

提高详细程度。

```bash
whatweb -v http://192.168.1.10
```

扫描多个目标。

```bash
whatweb -i targets.txt
```

输出 JSON。

```bash
whatweb --log-json whatweb.json http://192.168.1.10
```

设置 User-Agent。

```bash
whatweb --user-agent "Mozilla/5.0" http://192.168.1.10
```

## Nikto

基础扫描。

```bash
nikto -h http://192.168.1.10
```

指定端口。

```bash
nikto -h 192.168.1.10 -p 8080
```

扫描 HTTPS。

```bash
nikto -h https://192.168.1.10
```

保存文本报告。

```bash
nikto -h http://192.168.1.10 -o nikto.txt
```

保存 HTML 报告。

```bash
nikto -h http://192.168.1.10 -Format htm -o nikto.html
```

## 代理和请求头

Nikto 走代理。

```bash
nikto -h http://192.168.1.10 -useproxy http://127.0.0.1:8080
```

WhatWeb 走代理。

```bash
whatweb --proxy 127.0.0.1:8080 http://192.168.1.10
```

Nikto 设置认证。

```bash
nikto -h http://192.168.1.10 -id USER:PASSWORD
```

## 小记录

WhatWeb 更偏指纹识别，Nikto 更偏基础问题检查。结果要结合手工访问确认，尤其是旧路径、默认文件和误报项，不能只看工具输出下结论。
