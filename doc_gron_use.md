# gron 使用

gron 可以把 JSON 展平成一行一条的赋值形式，适合 grep、diff 和快速定位字段。处理大型 API 响应时很顺手。

## 展平 JSON

```bash
gron response.json
```

```bash
curl -s http://example.local/api/users | gron
```

```bash
cat response.json | gron | grep password
```

## 还原 JSON

```bash
gron response.json | ungron
```

```bash
gron response.json | grep 'user.id' | ungron
```

## 对比字段

```bash
gron admin.json > admin.gron
```

```bash
gron user.json > user.gron
```

```bash
diff -u user.gron admin.gron
```

小记录：gron 适合找隐藏字段、权限差异和敏感键名。JSON 很深时，它比肉眼翻浏览器响应稳定。
