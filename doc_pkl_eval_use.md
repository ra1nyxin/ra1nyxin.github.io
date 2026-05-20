# pkl 配置检查

Pkl 是 Apple 推出的配置语言，项目里出现 pkl 文件时可以用 pkl eval 渲染并审计实际配置。

## 常用命令

```bash
pkl eval config.pkl
```

```bash
pkl eval -f json config.pkl
```

```bash
pkl eval -f yaml config.pkl
```

```bash
pkl project resolve
```

```bash
pkl test tests.pkl
```

审计重点是渲染后的真实配置，源文件里的抽象结构只作为线索。
