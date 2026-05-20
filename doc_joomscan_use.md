# JoomScan 使用

JoomScan 用来检查 Joomla 站点的版本、组件、备份文件和常见配置问题。遇到老政企站、学校站和历史系统时很实用。

## 基础扫描

```bash
joomscan -u http://example.local
```

```bash
joomscan -u http://example.local --enumerate-components
```

```bash
joomscan -u http://example.local --random-agent
```

## 代理和输出

```bash
joomscan -u http://example.local --proxy http://127.0.0.1:8080
```

```bash
joomscan -u http://example.local --cookie "PHPSESSID=abc"
```

```bash
joomscan -u http://example.local -ec > joomla_scan.txt
```

## 辅助确认

```bash
curl -I http://example.local/administrator/
```

```bash
curl -s http://example.local/administrator/manifests/files/joomla.xml
```

Joomla 的组件版本比核心版本更容易形成风险。扫描结果里看到备份文件、安装目录和可访问后台时，优先手工复核。
