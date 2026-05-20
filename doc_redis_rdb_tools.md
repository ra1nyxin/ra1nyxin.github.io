# redis-rdb-tools 使用

redis-rdb-tools 用于解析 Redis RDB 文件，适合备份泄露和离线取证。

## 常用命令

```bash
rdb --command json dump.rdb
```

```bash
rdb --command memory dump.rdb
```

```bash
rdb --command justkeys dump.rdb
```

```bash
rdb --command protocol dump.rdb
```

```bash
rdb --command diff dump1.rdb dump2.rdb
```

小记录：拿到 RDB 后先离线分析，避免直接导入未知数据到生产 Redis。
