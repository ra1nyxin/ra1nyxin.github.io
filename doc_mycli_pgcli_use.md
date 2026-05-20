# mycli 与 pgcli

mycli 和 pgcli 是增强版数据库命令行客户端，适合手工审计和查询。

## 常用命令

```bash
mycli -h 192.168.1.10 -u user -p appdb
```

```bash
mycli mysql://user:pass@192.168.1.10/appdb
```

```bash
pgcli postgresql://user:pass@192.168.1.10/appdb
```

```bash
pgcli -h 192.168.1.10 -U user -d appdb
```

```bash
pgcli --list-dsn
```

自动补全能提高效率，但历史记录可能保存敏感 SQL，测试机要注意清理。
