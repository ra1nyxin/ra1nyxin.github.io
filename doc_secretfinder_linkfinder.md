# SecretFinder 与 LinkFinder

SecretFinder 偏向找敏感字符串，LinkFinder 偏向提取前端路由和 API 路径。两者适合跟 subjs、katana、httpx 串起来用。

## LinkFinder

```bash
python3 linkfinder.py -i https://example.local/app.js -o cli
```

```bash
python3 linkfinder.py -i https://example.local/app.js -o results.html
```

```bash
python3 linkfinder.py -i js_urls.txt -o cli
```

## SecretFinder

```bash
python3 SecretFinder.py -i https://example.local/app.js -o cli
```

```bash
python3 SecretFinder.py -i https://example.local/app.js -o results.html
```

```bash
python3 SecretFinder.py -i js_urls.txt -o cli
```

## 批量配合

```bash
cat live_js.txt | while read u; do python3 linkfinder.py -i "$u" -o cli; done | sort -u
```

前端命中的 token 字段先按环境判断，很多是测试值或公开 key。真正有价值的是可用的接口路径、内部域名和云资源地址。
