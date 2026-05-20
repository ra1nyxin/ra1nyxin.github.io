# mongoaudit 使用

mongoaudit 用于 MongoDB 安全配置检查，适合老 MongoDB 环境初筛。

## 常用命令

```bash
mongoaudit
```

```bash
mongoaudit --host 192.168.1.10
```

```bash
mongoaudit --host 192.168.1.10 --port 27017
```

```bash
mongoaudit --host 192.168.1.10 --username user --password pass
```

```bash
mongoaudit --host 192.168.1.10 --json
```

小记录：它适合快速发现无认证、弱配置和危险版本，结论要用 mongosh 复核。
