# ZooKeeper CLI 检查

ZooKeeper CLI 用于查看 znodes 和配置，适合检查未授权访问。

## 常用命令

```bash
zkCli.sh -server 192.168.1.10:2181
```

```bash
echo ruok | nc 192.168.1.10 2181
```

```bash
echo stat | nc 192.168.1.10 2181
```

```bash
echo dump | nc 192.168.1.10 2181
```

```bash
zkCli.sh -server 192.168.1.10:2181 ls /
```

ZooKeeper 未授权经常泄露服务发现和配置路径，写入测试要非常谨慎。
