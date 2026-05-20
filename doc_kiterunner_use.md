# Kiterunner 使用

Kiterunner 用于 API 路径发现，适合 REST、JSON API 和微服务枚举。

## 常用命令

```bash
kr scan http://example.local -w routes.kite
```

```bash
kr scan http://example.local -A=apiroutes-210228 -x 20
```

```bash
kr kb list
```

```bash
kr wordlist build routes.txt -o routes.kite
```

```bash
kr scan targets.txt -w routes.kite -o kr.json
```

小记录：API 枚举结果要结合状态码、响应长度和认证状态分析。
