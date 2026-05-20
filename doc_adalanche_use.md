# Adalanche 使用

Adalanche 用于分析 Active Directory 对象关系和权限路径，适合大型域环境快速建图。

## 常用命令

```bash
adalanche collect activedirectory --domain domain.local
```

```bash
adalanche analyze
```

```bash
adalanche webservice
```

```bash
adalanche collect activedirectory --username user --password pass --server dc01.domain.local
```

```bash
adalanche analyze --datapath data
```

它适合从防守视角看 AD 暴露面，输出要和 BloodHound 结果互相印证。
