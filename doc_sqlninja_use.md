# sqlninja 使用

sqlninja 用于 MSSQL 注入场景的利用验证，适合实验和授权测试。

## 常用命令

```bash
sqlninja -m t -f sqlninja.conf
```

```bash
sqlninja -m f -f sqlninja.conf
```

```bash
sqlninja -m p -f sqlninja.conf
```

```bash
sqlninja -m s -f sqlninja.conf
```

```bash
sqlninja -m r -f sqlninja.conf
```

现代环境更多用 sqlmap，但遇到老 MSSQL 注入时 sqlninja 仍可作为参考。
