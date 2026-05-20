# Pywerview 常用用法

Pywerview 是 PowerView 的 Python 风格实现，适合从 Linux 侧查询 AD。常用参数：`-t` DC，`-u` 用户，`-p` 密码，`-d` 域。

```bash
pywerview get-netuser -t 192.168.1.10 -u USER -p 'PASSWORD' -d example.local
```

```bash
pywerview get-netcomputer -t 192.168.1.10 -u USER -p 'PASSWORD' -d example.local
```

```bash
pywerview get-netgroup -t 192.168.1.10 -u USER -p 'PASSWORD' -d example.local
```

```bash
pywerview get-netdomaincontroller -t 192.168.1.10 -u USER -p 'PASSWORD' -d example.local
```

小记录：Pywerview 适合在没有 Windows 会话时补 AD 信息。输出字段多，建议把结果保存后再筛。
