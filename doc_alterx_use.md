# alterx 常用用法

alterx 适合生成子域名变体。常用参数：输入列表，变体模式，输出结果。

```bash
alterx -l subdomains.txt -o alterx.txt
```

```bash
alterx -l subdomains.txt -o alterx.txt -w
```

```bash
alterx -l subdomains.txt -o alterx.txt -include-subs
```

```bash
alterx -l subdomains.txt -o alterx.txt | dnsx -silent
```

alterx 偏规则化变体生成，适合在已知命名规律比较明确时使用。输出后最好立刻做解析验证。
