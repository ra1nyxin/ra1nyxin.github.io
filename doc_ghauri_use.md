# Ghauri 常用用法

Ghauri 是 SQL 注入验证和利用的另一套工具。常用参数：`-u` URL，`--data` POST 数据，`--batch` 批处理。

```bash
ghauri -u "http://192.168.1.10/item.php?id=1"
```

```bash
ghauri -u "http://192.168.1.10/item.php?id=1" --batch
```

```bash
ghauri -r request.txt
```

```bash
ghauri -u "http://192.168.1.10/item.php?id=1" --technique BEUSTQ
```

小记录：Ghauri 可以作为 sqlmap 的补充。命中前还是要先看手工响应差异，避免把无注入参数跑得太久。
