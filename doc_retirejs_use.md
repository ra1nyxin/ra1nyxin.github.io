# Retire.js 使用

Retire.js 用于检查前端 JavaScript 依赖的已知漏洞。老后台、历史活动页和静态资源目录里经常能发现过期库。

## 本地目录扫描

```bash
retire --path ./public
```

```bash
retire --path ./public --outputformat json
```

```bash
retire --path ./public --severity high
```

## URL 扫描

```bash
retire --url http://example.local
```

```bash
retire --url http://example.local --outputformat json --outputpath retire.json
```

```bash
retire --url http://example.local --proxy http://127.0.0.1:8080
```

## CI 检查

```bash
retire --path . --exitwith 13
```

小记录：Retire.js 命中后要确认库是否实际被页面加载，以及漏洞利用条件是否满足。只存在于废弃目录里的文件也要看是否可被访问。
